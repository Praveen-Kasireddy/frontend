import { NewChapterPopupComponent } from './new-chapter-popup.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DxModule } from '@shared/dx.module';
import { SharedStorageService } from 'ngx-store';
import { Project } from '@core/models/project/project';
import { CreateChapterModel } from '@core/models/project/create-chapter-model';
import { Observable, of } from 'rxjs';
import { ChapterService } from '@core/services/project/chapter.service';

describe('NewChapterPopupComponent', () => {
    let component: NewChapterPopupComponent;
    let fixture: ComponentFixture<NewChapterPopupComponent>;
    let chapterCreated: CreateChapterModel;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewChapterPopupComponent],
            imports: [DxModule],
            providers: [
                {
                    provide: SharedStorageService,
                    useValue: {
                        get(name: string): any {
                            return { projectGuid: 'project guid' };
                        }
                    }
                },
                {
                    provide: ChapterService,
                    useValue: {
                        create(projectGuid: string, chapter: CreateChapterModel): Observable<Object> {
                            chapterCreated = chapter;
                            return of({});
                        }
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(NewChapterPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should manage correctly all edit cycles', () => {
        component.productGuid = 'product guid';
        expect(component.selectedProject.projectGuid).toBe('project guid');
        component.visible = true;
        fixture.detectChanges();
        button('Add another').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);

        component.name = 'new chapter';
        spyOn(component.closeEvent, 'emit');
        spyOn(component.chapterCreated, 'emit');
        fixture.detectChanges();
        button('Add another').click();
        fixture.detectChanges();
        expect(chapterCreated.name).toBe('new chapter');
        expect(chapterCreated.productGuid).toBe('product guid');
        expect(component.chapterCreated.emit).toHaveBeenCalled();
        expect(component.closeEvent.emit).not.toHaveBeenCalled();
        expect(component.name).toBe('');
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(0);

        button('Done').click();
        fixture.detectChanges();
        expect(document.getElementsByClassName('dx-invalid-message').length).toBeGreaterThan(0);
        component.name = 'another new chapter';
        fixture.detectChanges();
        button('Done').click();
        fixture.detectChanges();
        expect(component.chapterCreated.emit).toHaveBeenCalledTimes(2);
        expect(component.closeEvent.emit).toHaveBeenCalled();
        expect(component.name).toBe('');
        expect(document.getElementsByClassName('dx-invalid-message').length).toBe(0);
    });

    it('on close should call closeEvent emit', () => {
        component.visible = true;
        fixture.detectChanges();
        spyOn(component.closeEvent, 'emit');
        fixture.detectChanges();
        (document.getElementsByClassName('dx-closebutton')[0] as HTMLDivElement).click();
        fixture.detectChanges();
        expect(component.closeEvent.emit).toHaveBeenCalled();
    });

    function button(name: string): HTMLSpanElement {
        return Array.from(document.getElementsByClassName('dx-button-text')).find(
            e => e.innerHTML == name
        ) as HTMLSpanElement;
    }
});
