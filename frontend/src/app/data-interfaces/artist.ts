export enum Status {
    active = 'Active',
    hiatus = 'On hiatus',
    resigned = 'Resigned'
}

export interface Artist {
    id: number;
    username: string;
    status: Status;
    //contactInfo: string[];
}