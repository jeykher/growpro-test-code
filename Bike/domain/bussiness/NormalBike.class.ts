import type { BikeRent } from '../interfaces/BikeRent.interface';

import { BikeType } from '../enums/BikeType.enum';

import { basePrizeBeforeFornight } from '../constants/basePrizeBeforeFortnight';
import { basePrizeAfterFornight } from '../constants/basePrizeAfterFornight';

export class NormalBike implements BikeRent {
    public type: BikeType;
    private basePrizeBeforeFornight: number;
    private basePrizeAfterFornight: number;
    constructor() {
        this.basePrizeBeforeFornight = basePrizeBeforeFornight;
        this.basePrizeAfterFornight = basePrizeAfterFornight;
        this.type = BikeType.Electric;
    }
    private calculateBasePrize(startDateRent: string): number {
        const startDateRentFragmented = startDateRent.split('/');
        const day = +startDateRentFragmented[0];
        if (day >= 15) {
            return this.basePrizeAfterFornight;
        }
        return this.basePrizeBeforeFornight;
    }
    public calculateRentCost(startDateToRent: string, daysToRent: number) {
        const basePrize: number = this.calculateBasePrize(startDateToRent);
        if (daysToRent <= 3) {
            return basePrize;
        }
        return basePrize + basePrize * (daysToRent - 3);
    }
}
