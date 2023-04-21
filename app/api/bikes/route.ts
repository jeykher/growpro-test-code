import type { DataResponse } from '@Core/domain/types';
import type { Bike } from '@Bike/domain/entities';

import { NextResponse } from 'next/server';

import { bikes } from '@Bike/infrastructure/data';

export const GET = async (): Promise<NextResponse> => {
    const response: DataResponse<Array<Bike>> = {
        data: bikes,
        message: 'All bikes have been obtained successfully!',
        status: 200,
        type: 'data'
    };
    return NextResponse.json(response);
};
