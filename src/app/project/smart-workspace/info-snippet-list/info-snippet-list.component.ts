import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoSnippet } from '@core/models';
import { SnippetsService } from '@core/services/project/snippets-service';
import { Observable } from 'rxjs';

@Component({
    selector: 'kosmos-info-snippet-list',
    templateUrl: './info-snippet-list.component.html',
    styleUrls: ['./info-snippet-list.component.scss']
})
export class InfoSnippetListComponent implements OnInit {
    infoSnippets$: Observable<Array<InfoSnippet>>;
    hasSnippets: boolean = false;
    _taskId: number;

    @Input()
    set taskId(value: number) {
        this._taskId = value;
        if (this._taskId != undefined) {
            this.infoSnippets$ = this._snippetsService.getTextSnippetsByTask(this._selectedProjectId, this._taskId);
        }
    }

    @Output()
    clickHandler: EventEmitter<InfoSnippet> = new EventEmitter();

    private get _selectedProjectId(): string {
        return this._route.snapshot.paramMap.get('id');
    }

    constructor(private _snippetsService: SnippetsService, private _route: ActivatedRoute) {}

    setSelectedSnippet(snippet: InfoSnippet) {
        this.clickHandler.emit(snippet);
    }

    ngOnInit() {}
}
