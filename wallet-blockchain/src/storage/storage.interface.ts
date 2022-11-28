export interface Payload {
    meta: PayloadMeta;
    content: PayloadContent;
}

export interface PayloadMeta {
    id: string;
}

export interface PayloadContent {
    data: string;
}
