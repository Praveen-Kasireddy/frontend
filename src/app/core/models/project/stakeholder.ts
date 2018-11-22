export class Stakeholder {
    id: number;
    companyName: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    description: string;

    constructor() {
        this.id = new Date().getTime() * -1;
    }
}
