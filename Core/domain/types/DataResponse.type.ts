export type DataResponse<T> = {
    data: T;
    message: string | undefined;
    status: number;
    type: 'data' | 'error';
};
