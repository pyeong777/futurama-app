export interface InfoType {
    id: number;
    synopsis: string;
    yearsAired: string;
    creators: Array<{
        name: string;
        url: string;
    }>;
}