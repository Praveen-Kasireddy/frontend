import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-task-button',
    templateUrl: 'new-task-button.component.html',
    styleUrls: ['new-task-button.component.scss']
})
export class NewTaskButtonComponent {
    @Input()
    @Input()
    @Output()
    componentClicked: EventEmitter<void> = new EventEmitter();
    @ViewChild('cardContent')
    cardContent: any;

    @HostListener('click')
    handleClick(): void {
        this.componentClicked.emit();
    }

    public positionLeft(): number {
        const element = this.cardContent.nativeElement;
        const rect = element.getBoundingClientRect();
        return rect.left;
    }
}
