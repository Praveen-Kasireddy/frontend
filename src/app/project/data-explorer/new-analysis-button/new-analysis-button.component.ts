import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-analysis-button',
    templateUrl: 'new-analysis-button.component.html',
    styleUrls: ['new-analysis-button.component.scss']
})
export class NewAnalysisButtonComponent {
    @Input()
    @Output()
    componentClicked: EventEmitter<void> = new EventEmitter();

    @HostListener('click')
    handleClick(): void {
        this.componentClicked.emit();
    }
}
