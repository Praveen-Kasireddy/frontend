import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { SheetDimensionType } from '@core/enum/sheet-dimension-type.enum';
import { Analysis, Project } from '@core/models';
import { DataExplorerService } from '@core/services';
import { SharedStorageService } from 'ngx-store';
import { Observable, of } from 'rxjs';
import { TableViewComponent } from './table-view.component';
import { AnalysisMapper } from '../../../../shared';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';

describe('TableViewComponent', () => {
    let component: TableViewComponent;
    let fixture: ComponentFixture<TableViewComponent>;
    const fakeHtml: string = '<table></table>';

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableViewComponent],
            providers: [
                {
                    provide: DataExplorerService,
                    useClass: DataExplorerMockService
                },
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(key: string) {
                            return new Project();
                        }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(TableViewComponent);
        component = fixture.componentInstance;
        const dataExplorerService: DataExplorerService = TestBed.get(DataExplorerService);
        component.analysis = dataExplorerService.currentAnalysis = getAnalysis(dataExplorerService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load html initially', () => {
        expect(component.html).toEqual(fakeHtml);
    });

    it('should reload html if analysis two dimensions have characteristics', () => {
        component.html = 'an old html string';

        component.reloadHtml('a name', component.analysis);
        fixture.detectChanges();

        expect(component.html).toEqual(fakeHtml);
    });

    it('should not reload html if analysis dimensions have no characteristics', () => {
        component.analysis.dimensions = [
            { type: SheetDimensionType.Columns, characteristics: [] },
            { type: SheetDimensionType.Rows, characteristics: [] }
        ].map(d => new AnalysisMapper().mapDimensionFromDto(d));

        component.html = 'an old html string';

        component.reloadHtml('a name', component.analysis);
        fixture.detectChanges();

        expect(component.html).toEqual('an old html string');
    });

    it('destroy should call subscriptionToUnsubscribe unsubscribe', () => {
        spyOn(component.subscriptionToUnsubscribe, 'unsubscribe');
        fixture.destroy();
        expect(component.subscriptionToUnsubscribe.unsubscribe).toHaveBeenCalled();
    });

    function getAnalysis(dataExplorerService: DataExplorerService): Analysis {
        return new AnalysisMapper().mapFromDto(dataExplorerService, {
            id: 1,
            name: 'Funny analysis name',
            isChartAnalysis: false,
            chartDisplayMode: undefined,
            userCreatedBy: undefined,
            chartType: undefined,
            dimensions: [
                {
                    type: SheetDimensionType.Columns,
                    characteristics: [
                        {
                            id: 1,
                            caption: 'characteristic 1',
                            characteristics: [{ id: 1, name: 'characteristic 1' }],
                            removeFromChart: false,
                            type: SheetCharacteristicType.Characteristic
                        }
                    ]
                },
                {
                    type: SheetDimensionType.Rows,
                    characteristics: [
                        {
                            id: 2,
                            caption: 'characteristic 2',
                            characteristics: [{ id: 2, name: 'characteristic 2' }],
                            removeFromChart: false,
                            type: SheetCharacteristicType.Characteristic
                        }
                    ]
                }
            ],
            scale: 1
        });
    }
});
