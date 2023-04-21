import type { Bike } from '@Bike/domain/entities';

import { BikeFactory } from '@Bike/domain/bussiness/BikeFactory.class';

interface Params {
    bike: Bike;
    days: number;
    email: string;
    name: string;
    phone: string;
    startdate: string;
}

export const calculateRentCost = (data: Params) => {
    switch (data.bike.type) {
        case 'Antigua':
            let ancientBike = BikeFactory.createBike(data.bike.type);
            return {
                ...data,
                bike: {
                    ...data.bike,
                    cost: ancientBike?.calculateRentCost(
                        data.startdate,
                        data.days
                    )
                }
            };
        case 'Eléctrica':
            let electricBike = BikeFactory.createBike(data.bike.type);
            return {
                ...data,
                bike: {
                    ...data.bike,
                    cost: electricBike?.calculateRentCost(
                        data.startdate,
                        data.days
                    )
                }
            };
        case 'Normal':
            let normalBike = BikeFactory.createBike(data.bike.type);
            return {
                ...data,
                bike: {
                    ...data.bike,
                    cost: normalBike?.calculateRentCost(
                        data.startdate,
                        data.days
                    )
                }
            };
        default:
            break;
    }
};
