import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LegalEntity } from '@core/models/project/legal-entity';
import { CheckRightstDirective, DxModule } from '@shared/index';
import { ProjectLegalEntitiesComponent } from './project-legal-entities.component';

xdescribe('ProjectLegalEntitiesComponent', () => {
    let component: ProjectLegalEntitiesComponent;
    let fixture: ComponentFixture<ProjectLegalEntitiesComponent>;
    let find: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectLegalEntitiesComponent, CheckRightstDirective],
            imports: [DxModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectLegalEntitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);
    });

    it('creates self', () => {
        expect(component).toBeTruthy();
    });

    it('displays legal entities', () => {
        const entity1 = new LegalEntity();
        entity1.id = 1;
        entity1.companyName = 'KPMG ITS GmbH';
        entity1.abbreviation = 'ITS';
        component.legalEntities.push(entity1);
        const entity2 = new LegalEntity();
        entity2.id = 2;
        entity2.companyName = 'KPMG International Cooperative';
        component.legalEntities.push(entity2);
        fixture.detectChanges();

        const names = fixture.debugElement.queryAll(By.css('span.name'));
        const abbreviations = fixture.debugElement.queryAll(By.css('span.abbreviation'));

        expect(names.length).toEqual(2);
        expect(names[0].nativeElement.innerHTML).toEqual('KPMG ITS GmbH');
        expect(names[1].nativeElement.innerHTML).toEqual('KPMG International Cooperative');

        expect(abbreviations.length).toEqual(2);
        expect(abbreviations[0].nativeElement.innerHTML).toEqual('ITS');
        expect(abbreviations[1].nativeElement.innerHTML).toEqual('');
    });

    it('adds an entity', () => {
        const dxCompanyName = find('dx-text-box#companyName').componentInstance;
        expect(dxCompanyName).toBeDefined();
        dxCompanyName.value = 'SPHI UG (haftungsbeschränkt)';

        const dxAbbreviation = find('dx-text-box#abbreviation').componentInstance;
        expect(dxAbbreviation).toBeDefined();
        dxAbbreviation.value = 'SPHI';
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const names = fixture.debugElement.queryAll(By.css('span.name'));
            const abbreviations = fixture.debugElement.queryAll(By.css('span.abbreviation'));

            expect(names.length).toEqual(1);
            expect(names[0].nativeElement.innerHTML).toEqual('SPHI UG (haftungsbeschränkt)');

            expect(abbreviations.length).toEqual(1);
            expect(abbreviations[0].nativeElement.innerHTML).toEqual('SPHI');
        });
    });

    it('adds an entity automatically when form is submitted', () => {
        const dxCompanyName = find('dx-text-box#companyName').componentInstance;
        expect(dxCompanyName).toBeDefined();
        dxCompanyName.value = 'SPHI UG (haftungsbeschränkt)';

        const dxAbbreviation = find('dx-text-box#abbreviation').componentInstance;
        expect(dxAbbreviation).toBeDefined();
        dxAbbreviation.value = 'SPHI';
        fixture.detectChanges();

        component.submitIfNewNotEmpty();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const names = fixture.debugElement.queryAll(By.css('span.name'));
            const abbreviations = fixture.debugElement.queryAll(By.css('span.abbreviation'));

            expect(names.length).toEqual(1);
            expect(names[0].nativeElement.innerHTML).toEqual('SPHI UG (haftungsbeschränkt)');

            expect(abbreviations.length).toEqual(1);
            expect(abbreviations[0].nativeElement.innerHTML).toEqual('SPHI');
        });
    });

    it('removes an entity', () => {
        const entity1 = new LegalEntity();
        entity1.id = 1;
        entity1.companyName = 'KPMG ITS GmbH';
        entity1.abbreviation = 'ITS';
        component.legalEntities.push(entity1);
        const entity2 = new LegalEntity();
        entity2.id = 2;
        entity2.companyName = 'KPMG International Cooperative';
        component.legalEntities.push(entity2);
        fixture.detectChanges();

        const removeButtons = fixture.debugElement.queryAll(By.css('span.btn-remove-item'));
        expect(removeButtons).toBeDefined();
        expect(removeButtons.length).toEqual(2);
        expect(removeButtons[0]).toBeDefined();

        removeButtons[0].triggerEventHandler('click', null);

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const names = fixture.debugElement.queryAll(By.css('span.name'));
            const abbreviations = fixture.debugElement.queryAll(By.css('span.abbreviation'));

            expect(names.length).toEqual(1);
            expect(names[0].nativeElement.innerHTML).toEqual('KPMG International Cooperative');

            expect(abbreviations.length).toEqual(1);
            expect(abbreviations[0].nativeElement.innerHTML).toEqual('');
        });
    });

    it('requires a name', () => {
        const dxCompanyName = find('dx-text-box#companyName').componentInstance;
        expect(dxCompanyName).toBeDefined();
        dxCompanyName.value = '';

        const dxAbbreviation = find('dx-text-box#abbreviation').componentInstance;
        expect(dxAbbreviation).toBeDefined();
        dxAbbreviation.value = 'SPHI';
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();

            const invalid = fixture.debugElement.queryAll(
                By.css(
                    'dx-text-box#companyName.dx-textbox.dx-texteditor.dx-texteditor-empty.dx-widget' +
                        '.dx-validator.dx-visibility-change-handler.dx-invalid'
                )
            );
            expect(invalid).toBeDefined();
        });
    });

    it('requires no abbreviation', () => {
        const dxCompanyName = find('dx-text-box#companyName').componentInstance;
        expect(dxCompanyName).toBeDefined();
        dxCompanyName.value = 'SPHI UG (haftungsbeschränkt)';

        const dxAbbreviation = find('dx-text-box#abbreviation').componentInstance;
        expect(dxAbbreviation).toBeDefined();
        dxAbbreviation.value = '';
        fixture.detectChanges();

        component.onSubmit();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();

            const names = fixture.debugElement.queryAll(By.css('span.name'));
            const abbreviations = fixture.debugElement.queryAll(By.css('span.abbreviation'));

            expect(names.length).toEqual(1);
            expect(names[0].nativeElement.innerHTML).toEqual('SPHI UG (haftungsbeschränkt)');

            expect(abbreviations.length).toEqual(1);
            expect(abbreviations[0].nativeElement.innerHTML).toEqual('');
        });
    });
});
