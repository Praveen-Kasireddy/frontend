import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Objective } from '@core/models/project/objective';
import { CheckRightstDirective, DxModule } from '@shared/index';
import { DxTextBoxComponent } from 'devextreme-angular';
import { ProjectObjectivesComponent } from './project-objectives.component';

xdescribe('ProjectObjectivesComponent', () => {
    let component: ProjectObjectivesComponent;
    let fixture: ComponentFixture<ProjectObjectivesComponent>;
    let find: any;
    let dxTextBox: DxTextBoxComponent;
    let objectiveItems: any[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectObjectivesComponent, CheckRightstDirective],
            imports: [DxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectObjectivesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates self', () => {
        expect(component).toBeTruthy();
    });

    it('displays objectives', () => {
        const objective1 = new Objective();
        objective1.id = 1;
        objective1.description = 'Manneskraft';
        const objective2 = new Objective();
        objective2.id = 2;
        objective2.description = 'Anmut';
        component.objectives = [objective1, objective2];
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            objectiveItems = fixture.debugElement.queryAll(By.css('span.objective-item'));

            // check html
            expect(objectiveItems).toBeDefined();
            expect(objectiveItems.length).toEqual(2);
            expect(objectiveItems[0].nativeElement.innerHTML).toEqual('Manneskraft');
            expect(objectiveItems[1].nativeElement.innerHTML).toEqual('Anmut');
        });
    });

    it('adds an objective', () => {
        // arrange
        const newObjective = new Objective();
        newObjective.description = 'Objective';
        component.newValue = newObjective;
        fixture.detectChanges();

        // act
        component.onSubmit();
        fixture.detectChanges();

        // assert
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        dxTextBox = find('dx-text-box').componentInstance;

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            objectiveItems = fixture.debugElement.queryAll(By.css('span.objective-item'));

            // check component
            expect(component.objectives.length).toEqual(1);
            expect(component.objectives[0].description).toEqual('Objective');
            expect(component.newValue).toBeTruthy();
            expect(component.newValue.description).toEqual('');

            // check html
            expect(dxTextBox).toBeDefined();
            expect(dxTextBox.text).toEqual('');
            expect(objectiveItems).toBeDefined();
            expect(objectiveItems.length).toEqual(1);
            expect(objectiveItems[0].nativeElement.innerHTML).toEqual('Objective');
        });
    });

    it('adds an objective automatically when form is submitted', () => {
        // arrange
        const newObjective = new Objective();
        newObjective.description = 'Objective';
        component.newValue = newObjective;
        fixture.detectChanges();

        // act
        component.submitIfNewNotEmpty();
        fixture.detectChanges();

        // assert
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            objectiveItems = fixture.debugElement.queryAll(By.css('span.objective-item'));

            expect(component.objectives.length).toEqual(1);
            expect(component.objectives[0].description).toEqual('Objective');
            expect(component.newValue).toBeTruthy();
            expect(component.newValue.description).toEqual('');

            // check html
            expect(dxTextBox).toBeDefined();
            expect(dxTextBox.text).toEqual('');
            expect(objectiveItems).toBeDefined();
            expect(objectiveItems.length).toEqual(1);
            expect(objectiveItems[0].nativeElement.innerHTML).toEqual('Objective');
        });
    });

    it('deletes an objective', () => {
        // arrange
        const newObjective = new Objective();
        newObjective.description = 'Objective';
        component.newValue = newObjective;
        fixture.detectChanges();
        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            // find delete button on objective item in list
            const removeButtons = fixture.debugElement.queryAll(By.css('span.btn-remove-item'));
            expect(removeButtons).toBeDefined('remove buttons missing');
            expect(removeButtons.length).toEqual(1);
            expect(removeButtons[0]).toBeDefined('first remove button not found');

            // act
            removeButtons[0].triggerEventHandler('click', null);

            // assert
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                objectiveItems = fixture.debugElement.queryAll(By.css('span.objective-item'));

                // check if objective items list is empty in component
                expect(component.objectives.length).toEqual(0);

                // check if objective items list is empty in html
                expect(objectiveItems).toBeDefined('objectives list not found');
                expect(objectiveItems.length).toEqual(0);
            });
        });
    });

    it('requires a description', () => {
        // arrange
        const newObjective = new Objective();
        newObjective.description = '';
        component.newValue = newObjective;
        fixture.detectChanges();

        // act
        component.onSubmit();
        fixture.detectChanges();

        // assert
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
        dxTextBox = find('dx-text-box').componentInstance;

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            objectiveItems = fixture.debugElement.queryAll(By.css('span.objective-item'));

            // check component
            expect(component.objectives.length).toEqual(0);
            expect(component.newValue).toBeTruthy();
            expect(component.newValue.description).toEqual('');

            // check html
            expect(dxTextBox).toBeDefined();
            expect(dxTextBox.text).toEqual('');
            expect(objectiveItems).toBeDefined();
            expect(objectiveItems.length).toEqual(0);

            // check if validation fails
            const invalid = fixture.debugElement.queryAll(
                By.css(
                    'dx-text-box#newValue.dx-textbox.dx-texteditor.dx-texteditor-empty.dx-widget' +
                        '.dx-validator.dx-visibility-change-handler.dx-invalid'
                )
            );
            expect(invalid).toBeDefined();
        });
    });
});
