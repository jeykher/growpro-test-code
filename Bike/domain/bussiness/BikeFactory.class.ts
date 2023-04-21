import { AncientBike } from './AncientBike.class';
import { ElectricBike } from './ElectricBike.class';
import { NormalBike } from './NormalBike.class';

export class BikeFactory {
    static createBike(type: string) {
        switch (type) {
            case 'Antigua':
                return new AncientBike();
            case 'Eléctrica':
                return new ElectricBike();
            case 'Normal':
                return new NormalBike();
            default:
                break;
        }
    }
}
