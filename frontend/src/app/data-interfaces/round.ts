export interface Round {
    number: number;
    date: Date;
    done: boolean;
    active: boolean;
    skipped: boolean;
    username: string;
    turnId: number;         //turnId
}