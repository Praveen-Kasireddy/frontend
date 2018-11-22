import { Injectable } from '@angular/core';
import { SmartWorkspaceMessageType } from '@core/enum/smart-workspace-message-type.enum';
import { SmartWorkspaceMessage } from '@core/models/messages/smart-workspace-message';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SmartWorkspaceMessageService {
    private subject = new Subject<SmartWorkspaceMessage>();

    sendMessage(type: SmartWorkspaceMessageType) {
        this.subject.next(new SmartWorkspaceMessage(type));
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<SmartWorkspaceMessage> {
        return this.subject.asObservable();
    }
}
