import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-chapter-button',
    templateUrl: 'new-chapter-button.component.html',
    styleUrls: ['new-chapter-button.component.scss']
})
export class NewChapterButtonComponent {
    @Input()
    @Output()
    componentClicked: EventEmitter<void> = new EventEmitter();

    @HostListener('click')
    handleClick(): void {
        this.componentClicked.emit();
    }
}
