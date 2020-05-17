export enum Status {
    active = 'Active',
    hiatus = 'On hiatus',
    resigned = 'Resigned'
}

export interface Artist {
    id: number;
    name: string;
    status: Status;
    //contactInfo: string[];
}