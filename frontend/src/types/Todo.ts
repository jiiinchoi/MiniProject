 export interface TodoAdd {
    title: string;
    writer: string;
}

export interface todoDTO {
    tno: number;
    title: string;
    writer: string;
    regDate?: string;
    modDate?: string;
}

export interface PageResponse<T> {
    content: T[];
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
}
