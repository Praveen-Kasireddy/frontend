import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

import { ICONS_MAPPING } from './svg-icon-mapping';
import { SvgIconTypes } from './svg-icon.enum';

@Component({
    selector: 'kosmos-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit, OnChanges {
    @Input() icon: SvgIconTypes;
    @Input() width: number;
    @Input() height: number;
    @Input() viewBox: string;
    @Input() fill: string = 'currentColor';
    @Input() stroke: string = '#c0d2e8';

    public _path: string;
    public _viewBox: string;
    public _width: number;
    public _height: number;

    setSvgProps(iconData: Object) {
        const originalWidth = iconData['width'];
        const originalHeight = iconData['height'];
        this._width = this.width || originalWidth;
        this._height = this.height || originalHeight;
        this._path = iconData['path'];
        this._viewBox = this.viewBox || `0 0 ${originalWidth} ${originalHeight}`;
    }

    ngOnInit() {
        this.setSvgProps(ICONS_MAPPING[this.icon]);
    }

    // TODO: Update this with OnPush CD
    ngOnChanges(changes: SimpleChanges) {
        if (changes['icon']) {
            this.setSvgProps(ICONS_MAPPING[changes['icon'].currentValue]);
        }
    }
}
