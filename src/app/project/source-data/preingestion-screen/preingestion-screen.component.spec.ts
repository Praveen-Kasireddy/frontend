import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileManagerService } from '@core/services';
import { SharedStorageService } from 'ngx-store';
import { PreingestionScreenComponent } from './preingestion-screen.component';
import { Project } from '@core/models';
import { MessageService } from '@core/services/messages/message.service';

describe('PreingestionScreenComponent', () => {
    let component: PreingestionScreenComponent;
    let fixture: ComponentFixture<PreingestionScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PreingestionScreenComponent],
            providers: [
                {
                    provide: FileManagerService,
                    useValue: {getContent(projectGuid: string, storageId: string) {
                        return { };
                    }}
                },
                {
                    provide: SharedStorageService,
                    useValue: {get(key: string) {
                        return new Project();
                    }}
                },
                {
                    provide: MessageService, useValue: { sendMessage() {}}
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreingestionScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
