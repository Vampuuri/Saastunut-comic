export interface Turn {
    id: number;
    artist: string;
    round: number;
    date: Date;         // deadline or date when pages were uploaded
    done: boolean;
    active: boolean;
    skipped: boolean;
}