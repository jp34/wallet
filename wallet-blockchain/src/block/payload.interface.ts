export interface Payload {
    meta: PayloadMeta;
    content: PayloadContent;
}

export interface PayloadMeta {
    id: number;
    size: number;
}

export interface PayloadContent {
    data: string;
}
