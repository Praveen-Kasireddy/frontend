import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { MockSharedStorageService } from '@core/mocks/shared-storage/shared-storage.mock.service';
import { SheetDimension } from '@core/models/project/data-explorer/sheet-dimension';
import { DataPaletteItem } from '@core/models/project/data-palette-item';
import { DataExplorerService } from '@core/services';
import { DxModule } from '@shared/dx.module';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { DataPaletteComponent } from './data-palette.component';

describe('DataPaletteComponent', () => {
    let component: DataPaletteComponent;
    let fixture: ComponentFixture<DataPaletteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DataPaletteComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: DataExplorerService,
                    useValue: {
                        currentAnalysisChanged: new EventEmitter(),
                        dimensionChanged: new EventEmitter(),
                        openPaletteRequested: new EventEmitter(),
                        palette(projectGuid: string, dimension: SheetDimensionType): Observable<DataPaletteItem[]> {
                            return of([
                                {
                                    name: 'group',
                                    isExpanded: true,
                                    cssClass: 'group',
                                    children: [{ name: 'item', cssClass: 'item' }]
                                }
                            ] as DataPaletteItem[]);
                        },
                        selectDimension(dimension: SheetDimension) {
                            this.selectedDimension = dimension;
                            this.dimensionChanged.emit(dimension);
                        }
                    }
                },
                {
                    provide: SharedStorageService,
                    useClass: MockSharedStorageService
                }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(DataPaletteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(document.getElementsByClassName('group').length).toBe(0);
        expect(document.getElementsByClassName('item').length).toBe(0);
    });

    it('openPaletteRequest should show groups and items', () => {
        const service = TestBed.get(DataExplorerService);
        service.selectDimension({ type: SheetDimensionType.Columns });
        service.openPaletteRequested.emit();
        fixture.detectChanges();
        expect(document.getElementsByClassName('group').length).toBe(1);
        expect(document.getElementsByClassName('item').length).toBe(1);
    });

    it('click on x should hide me', () => {
        component.visible = true;
        fixture.detectChanges();
        (document.getElementsByClassName('close-button')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(component.visible).toBeFalsy();
    });

    it('destroy should unsubscribe dimensionChangedSubscriptino', () => {
        spyOn(component.dimensionChangedSubscription, 'unsubscribe');
        fixture.destroy();
        expect(component.dimensionChangedSubscription.unsubscribe).toHaveBeenCalled();
    });
});
