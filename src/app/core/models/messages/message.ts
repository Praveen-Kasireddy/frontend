import { MessageType } from '@core/enum/message-type.enum';

export class Message {
    public type: MessageType;

    constructor(type: MessageType) {
        this.type = type;
    }
}
