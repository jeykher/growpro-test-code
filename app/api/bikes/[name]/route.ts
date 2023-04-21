import type { Bike } from '@Bike/domain/entities';

import { NextResponse } from 'next/server';

import { bikes } from '@Bike/infrastructure/data';

interface Params {
    name: string;
}

interface RequestOptions {
    params: Params;
}

export const GET = async (
    _request: Request,
    { params }: RequestOptions
): Promise<NextResponse> => {
    const bike = bikes?.find((bike: Bike) => bike.name === params.name);
    if (!bike) {
        return NextResponse.json({
            data: null,
            message:
                'Do not exist one bike with that name. Bike has not found.',
            status: 404,
            type: 'error'
        });
    }
    return NextResponse.json({
        data: bike,
        message: 'Bike obtained successfully.',
        status: 200,
        type: 'data'
    });
};
