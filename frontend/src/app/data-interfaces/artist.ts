export enum Status {
    active = 'Active',
    hiatus = 'On hiatus',
    resigned = 'Resigned'
}

export interface Artist {
    name: string;            // also id/key
    status: Status;
    contactInfo: string[];
}