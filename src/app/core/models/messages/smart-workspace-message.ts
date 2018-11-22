import { SmartWorkspaceMessageType } from '@core/enum/smart-workspace-message-type.enum';

export class SmartWorkspaceMessage {
    type: SmartWorkspaceMessageType;

    constructor(type: SmartWorkspaceMessageType) {
        this.type = type;
    }
}
