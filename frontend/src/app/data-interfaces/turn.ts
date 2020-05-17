export interface Turn {
    id: number;
    username: string;
    date: Date;         // deadline or date when pages were uploaded
    done: boolean;
    active: boolean;
    skipped: boolean;
}