export class Language {
    id: number;
    // ISO 3166-1-alpha-2 code (https://www.iso.org/obp/ui/#search/code/)
    isoCode: string;
    cultureName: string;
    name: string;
    isActive: boolean;

    constructor(id: number, isoCode: string, cultureName: string, name: string, isActive: boolean = true) {
        this.id = id;
        this.isoCode = isoCode;
        this.cultureName = cultureName;
        this.name = name;
        this.isActive = isActive;
    }
}
