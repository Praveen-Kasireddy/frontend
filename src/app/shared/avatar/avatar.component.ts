import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { AvatarSize } from './avatar.enum';
import { AvatarClassName } from './avatar.interface';

const AVATAR_CLASSNAME: AvatarClassName = {
    [AvatarSize.XSMALL]: '-xs-small',
    [AvatarSize.SMALL]: '-small',
    [AvatarSize.MEDIUM]: '-medium',
    [AvatarSize.LARGE]: '-large'
};

const AvatarSizeMap = {
    [AvatarSize.XSMALL]: 16,
    [AvatarSize.SMALL]: 24,
    [AvatarSize.MEDIUM]: 32,
    [AvatarSize.LARGE]: 66
};

export enum AvatarTheme {
    DEFAULT = ('default' as any) as AvatarTheme,
    INVERTED = ('inverted' as any) as AvatarTheme
}

@Component({
    selector: 'kosmos-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
    /**
     *  Bindings
     */
    @Input()
    src: string;

    @Input()
    set name(value: string) {
        this.avatarName = value;
        this.setInitials();
    }

    avatarName: string = '';
    avatarClass: string;

    @Input()
    size: number = AvatarSize.MEDIUM;
    avatarSize: number = AvatarSizeMap[this.size];

    @Input()
    background: string;

    initials: string;

    @HostBinding('class')
    class = AVATAR_CLASSNAME[this.size];

    get hasName(): boolean {
        return !!this.avatarName;
    }

    get showInitials(): boolean {
        return this.hasName;
    }

    get showDefaultIcon(): boolean {
        return !this.hasName;
    }

    constructor() {}

    setInitials() {
        if (this.avatarName != '') {
            const splitName = this.avatarName.split(/[ -]+/);
            if (!splitName || splitName.length == 0) {
                this.initials = '';
            } else {
                if (splitName && splitName.length > 2) {
                    this.initials = (splitName[0][0] + splitName[1][0] + splitName[2][0]).toUpperCase();
                } else if (splitName && splitName.length > 1) {
                    this.initials = (splitName[0][0] + splitName[1][0] + splitName[1][1]).toUpperCase();
                } else {
                    this.initials = (splitName[0][0] + splitName[0][1] + splitName[0][2]).toUpperCase();
                }
            }
        }
    }
}
