import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { UserRoleType } from '../user/user-role-type.enum';
import { User } from '../user/user.interface';
import { AvatarComponent } from './avatar.component';
import { AvatarSize } from './avatar.enum';

@Component({
    template: `<kosmos-avatar [src]="src" [name]="name" [size]="size"></kosmos-avatar>`
})
class AvatarTestComponent {
    src: string;
    name: string;
    size: AvatarSize;

    @ViewChild(AvatarComponent)
    child: AvatarComponent;
}

describe('AvatarComponent', () => {
    let comp: AvatarTestComponent;
    let fixture: ComponentFixture<AvatarTestComponent>;
    let el: HTMLElement;
    let find: (s: string) => DebugElement | null;
    let user: User;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AvatarComponent, AvatarTestComponent, SvgIconComponent]
        });

        fixture = TestBed.createComponent(AvatarTestComponent);
        comp = fixture.componentInstance;
        el = fixture.debugElement.nativeElement;
        find = (de => selector => de.query(By.css(selector)))(fixture.debugElement);

        // Partner
        user = {
            active: true,
            avatar: 'assets/images/avatar/michael-partner.jpg',
            name: 'Michael Partner',
            password: 'michael',
            role: {
                uuid: 'c3a34ecc-388f-415c-a5fe-40da53b2808d',
                name: UserRoleType.PARTNER
            },
            id: 'c5cec548-3162-49b5-ad38-a3288122bb07',
            username: 'michael'
        };
    });

    describe('when no src or name is provided', () => {
        it('should not render initials', () => {
            comp.name = '';
            fixture.detectChanges();
            expect(comp.child.showInitials).toBe(false);
        });
    });

    describe('when only name input is set', () => {
        beforeEach(() => {
            comp.name = user.name;
            fixture.detectChanges();
        });

        it('should display initials', () => {
            expect(comp.child.initials).toBe('MPA');
            expect(find('.initials').nativeElement.textContent).toContain('MPA');
        });

        it('should not display an image', () => {
            expect(find('img')).toBeNull();
        });
    });

    xit('should accept an AvatarSize to alter the size of the image', () => {
        comp.name = '';
        comp.src = user.avatar;
        comp.size = AvatarSize.SMALL;
        fixture.detectChanges();

        expect(find('kosmos-avatar').nativeElement.classList).toContain('-small');
    });
});
