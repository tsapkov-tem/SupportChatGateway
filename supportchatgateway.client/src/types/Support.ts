export interface Support {
    supportName: string;
    supportLastName: string;
    supportType: string;
    supportStatus: SupportStatus;
}

export enum SupportStatus {
    Online,
    Ofline
}