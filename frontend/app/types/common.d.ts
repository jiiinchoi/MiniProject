
export interface ActionResult<T>{
    result: string,
    data: T
}

export interface PagingProps<> {
    page: number;
    size: number;
    start: number;
    end: number;
    prev: boolean;
    next: boolean;
    movePage: (page: number) => void;
}

export interface PageResponseDTO<T> {
    dtoList: T[];
    total: number;
    size: number;
    start: number;
    end: number;
    page: number;
    prev: boolean;
    next: boolean;
    prevPage: number;
    nextPage: number;
    pageNumList: number[];
    current:number

}



