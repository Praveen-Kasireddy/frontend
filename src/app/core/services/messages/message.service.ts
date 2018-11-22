import { Injectable } from '@angular/core';
import { MessageType } from '@core/enum/message-type.enum';
import { Message } from '@core/models/messages/message';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
    private subject = new Subject<Message>();

    sendMessage(message: MessageType) {
        this.subject.next(new Message(message));
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<Message> {
        return this.subject.asObservable();
    }
}
