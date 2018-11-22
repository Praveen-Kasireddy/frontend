import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessStateEnum } from '@core/enum/process-state-enum';
import { FileListMock } from '@core/mocks/file-list-mock';
import { MasterMockDataImportService } from '@core/mocks/master-data/master-mock-data-import.service';
import { MasterDataImportService, UserService } from '@core/services';
import { LoadingCubeComponent } from '@shared/animations/loading-cube/loading-cube.component';
import { DxModule } from '@shared/dx.module';
import { MessageBoxComponent } from '@shared/message-box/message-box.component';
import { DxDataGridModule, DxToastModule } from 'devextreme-angular';
import { LocalStorageService, SharedStorageService } from 'ngx-store';
import { of } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist.component';

describe('UserlistComponent', () => {
    let component: UserlistComponent;
    let fixture: ComponentFixture<UserlistComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserlistComponent,
                AddUserComponent,
                EditUserComponent,
                LoadingCubeComponent,
                MessageBoxComponent
            ],
            providers: [
                UserService,
                HttpClient,
                HttpHandler,
                LocalStorageService,
                SharedStorageService,
                {
                    provide: MasterDataImportService,
                    useClass: MasterMockDataImportService
                }
            ],
            imports: [DxDataGridModule, DxToastModule, DxModule]
        });

        fixture = TestBed.createComponent(UserlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should call addUser and show the Popup', () => {
        spyOn(component, 'addUser');
        component.addUserPopup.show();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.addUser).toHaveBeenCalled();
            expect(component.addUserPopup.show).toHaveBeenCalled();
        });
    });

    it('should call editUser and show the Popup', () => {
        spyOn(component, 'editUser');
        component.editUserPopup.show();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.editUser).toHaveBeenCalled();
            expect(component.editUserPopup.show).toHaveBeenCalled();
        });
    });

    it('should call addDoneHandler and create user', () => {
        expect(component).toBeTruthy();
    });

    it('should call editDoneHandler and should show error', () => {
        spyOn(component, 'editDoneHandler');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.editDoneHandler).toHaveBeenCalled();
            expect(component.showExistsMessage).toBeTruthy();
        });
    });

    describe('user upload', () => {
        it('user upload should show success', () => {
            testUserUpload(ProcessStateEnum.FINISHED, undefined);
            expect(component.showMessageBox).toHaveBeenCalledWith('Success', 'The data was imported successfully.');
        });

        it('user upload show errors', () => {
            testUserUpload(ProcessStateEnum.FINISHED_WITH_ERRRORS, 'error list');
            expect(component.showMessageBox).toHaveBeenCalledWith(
                'Error',
                'The import file violates the following conventions: error list'
            );
        });

        function testUserUpload(state: ProcessStateEnum, message: string) {
            jasmine.clock().install();
            const service = TestBed.get(MasterDataImportService);
            spyOn(service, 'checkResult').and.returnValue(of({ state: state, message: message }));
            spyOn(component, 'showMessageBox');
            component.importUsers(new FileListMock());
            expect(component.isImporting).toBeTruthy();
            jasmine.clock().tick(10000);
            fixture.detectChanges();
            jasmine.clock().uninstall();
            expect(component.isImporting).toBeFalsy();
        }
    });
});
