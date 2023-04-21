import compareAsc from 'date-fns/compareAsc'

interface HookValues {
    convertDateFromDayjsToDate: (date: any) => string;
    isEndDateValid: (startDate: any, endDate: any) => boolean;
}

export const useRentBikeForm = (): HookValues => {
    const addBeforeZeroDate = (date: string) => {       
        if(date.length < 2) {
            return `0${date}`;
        }
        return date;
    };
    const isEndDateValid = (startDate: any, endDate: any): boolean => {
        const startDateFormatted = new Date(startDate.$y, (startDate.$M), startDate.$D);
        const endDateFormatted = new Date(endDate.$y, (endDate.$M), endDate.$D);
        const result = compareAsc(startDateFormatted, endDateFormatted);
        if(result === -1 || result === 0) {
            return true
        }
        return false;
    };
    const convertDateFromDayjsToDate = (date: any): string => {
        return `${addBeforeZeroDate(date.$D.toString())}/${addBeforeZeroDate((date.$M + 1).toString())}/${date.$y.toString()}`;
    };
    return {
        isEndDateValid,
        convertDateFromDayjsToDate
    };
};