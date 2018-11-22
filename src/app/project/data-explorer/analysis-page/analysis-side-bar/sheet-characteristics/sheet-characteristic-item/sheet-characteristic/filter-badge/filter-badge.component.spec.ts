import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacteristicItemInfo } from '@shared/data-explorer/characteristic-item-info';
import { DroppedCharacteristicInfo } from '@shared/data-explorer/dropped-characteristic-info';
import { SheetCharacteristicService } from '../../../sheet-characteristic.service';
import { FilterBadgeComponent } from './filter-badge.component';

describe('FilterBadgeComponent', () => {
    let component: FilterBadgeComponent;
    let fixture: ComponentFixture<FilterBadgeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FilterBadgeComponent],
            providers: [
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
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
