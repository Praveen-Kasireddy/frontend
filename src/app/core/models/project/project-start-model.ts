import { NamedUser } from '@core/models/configuration/named-user';
import { CommercialAction } from '@core/models/configuration/commercial-action';

export class ProjectStartModel {
    name: string;
    clientName: string;
    targetName: string;
    daContacts: NamedUser[];
    commercialAction: number;
    startDate: string;
    endDate: string;
    fees: number;
    briefing: string;

    constructor() {
        this.daContacts = [];
    }
}
