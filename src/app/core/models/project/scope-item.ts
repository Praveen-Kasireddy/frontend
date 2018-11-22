import { User } from '@core/models/user';

export class ScopeItem {
    id: number;
    scopeItemGuid: string;
    name: string;
    reportTitle: string;
    progressStateId: number;
    responsibleUser: User;
    isSection: boolean;
    children: ScopeItem[];
    isSelected: boolean;

    constructor() {
        this.children = [];
    }
}
