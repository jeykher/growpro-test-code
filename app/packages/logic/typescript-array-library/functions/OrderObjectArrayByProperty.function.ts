type Order = 'asc' | 'desc';

export const OrderObjectArrayByProperty = <T>(
    data: Array<T>,
    property: string,
    orderToSort: Order
) => {
    const sortedObjects = [...data];
    if (sortedObjects.every((item: T) => item.hasOwnProperty(property))) {
        sortedObjects.sort((a: any, b: any) => {
            if (a[property] < b[property]) {
                return orderToSort === 'asc' ? -1 : 1;
            }
            if (a[property] > b[property]) {
                return orderToSort === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }
    return sortedObjects;
};
