import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'kosmos-new-analysis',
    templateUrl: 'new-analysis.component.html',
    styleUrls: ['new-analysis.component.scss']
})
export class NewAnalysisComponent {
    @Input()
    @Output()
    componentClicked: EventEmitter<void> = new EventEmitter();

    @HostListener('click')
    handleClick(): void {
        this.componentClicked.emit();
    }
}
