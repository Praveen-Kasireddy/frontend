import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SheetCharacteristicType } from '@core/enum/sheet-characteristic-type.enum';
import { DataExplorerMockService } from '@core/mocks/project/data-explorer.mock.service';
import { SheetCharacteristic } from '@core/models/project/data-explorer/sheet-characteristic';
import { DataExplorerService } from '@core/services';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { DxTooltipModule } from 'devextreme-angular';
import { SheetCharacteristicService } from '../../sheet-characteristic.service';
import { CharacteristicHeaderComponent } from './characteristic-header.component';
import { FilterBadgeComponent } from './filter-badge/filter-badge.component';
import { SheetCharacteristicComponent } from './sheet-characteristic.component';
import { AnalysisMapper } from '../../../../../../../shared';
import { SheetDimensionType } from '@core/enum';

describe('SheetCharacteristicComponent', () => {
    let component: SheetCharacteristicComponent;
    let fixture: ComponentFixture<SheetCharacteristicComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SheetCharacteristicComponent, FilterBadgeComponent, CharacteristicHeaderComponent],
            providers: [
                { provide: DataExplorerService, useClass: DataExplorerMockService },
                {
                    provide: SheetCharacteristicService,
                    useValue: {
                        toggleCharacteristicChartEnabled(i: CharacteristicItemInfo) {},
                        renameCharacteristic(i: CharacteristicItemInfo) {},
                        createGroup(i: number) {},
                        releaseFromGroup(info: CharacteristicItemInfo) {},
                        removeCharacteristicItem(info: CharacteristicItemInfo) {},
                        dropItem(info: DroppedCharacteristicInfo) {},
                        getColumnIndexLetter(i: number) {
                            return 'AB';
                        }
                    }
                }
            ],
            imports: [DxTooltipModule]
        });
        fixture = TestBed.createComponent(SheetCharacteristicComponent);
        component = fixture.componentInstance;

        component.characteristic = {
            characteristics: [{ id: 1, name: 'name of characteristic' }]
        } as SheetCharacteristic;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(document.getElementsByClassName('content')[0].innerHTML).toContain('name of characteristic');
    });

    it('on drag enter should create increase placeholder', () => {
        component.onDragEnter(new DragEvent('dragenter'));
        fixture.detectChanges();
        expect(document.getElementsByClassName('placeholder')[0].classList.contains('draggable-over-me')).toBeTruthy();
        component.onDragEnter(new DragEvent('dragenter'));
        fixture.detectChanges();
        component.onDragLeave(new DragEvent('dragleave'));
        fixture.detectChanges();
        expect(document.getElementsByClassName('placeholder')[0].classList.contains('draggable-over-me')).toBeTruthy();
        component.onDragLeave(new DragEvent('dragleave'));
        fixture.detectChanges();
        expect(document.getElementsByClassName('placeholder')[0].classList.contains('draggable-over-me')).toBeFalsy();
    });

    it('on drop should emit and reset draggableOverMe', () => {
        component.onDragEnter(new DragEvent('dragenter'));
        fixture.detectChanges();
        component.onDrop(new DragEvent('drop'));
        fixture.detectChanges();
        expect(document.getElementsByClassName('placeholder')[0].classList.contains('draggable-over-me')).toBeFalsy();
    });

    it('for formula should edit', () => {
        expect(document.getElementsByClassName('kpmg-icon-calculator').length).toBe(0);
        component.characteristic = new AnalysisMapper().mapSheetCharacteristicFromDto({
            id: 1,
            type: SheetCharacteristicType.CustomFormula,
            caption: undefined,
            removeFromChart: undefined
        }, SheetDimensionType.Columns);
        fixture.detectChanges();
        const service = TestBed.get(DataExplorerService);
        spyOn(service, 'editFormula');
        (document.getElementsByClassName('kpmg-icon-calculator')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(service.editFormula).toHaveBeenCalled();
    });
});
