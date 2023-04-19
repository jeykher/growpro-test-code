import type { Bike } from '@Bike/domain/entities';

import { OrderObjectArrayByProperty } from '@Packages/logic/typescript-array-library';

export const bikesPresenter = (bikes: Array<Bike>) => {
    return OrderObjectArrayByProperty<Bike>(bikes, 'name', 'asc');
};
