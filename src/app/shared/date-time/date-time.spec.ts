import { DateTime } from '@shared/date-time/date-time';

describe('DateTime', () => {
    it('fromMinutes should create date time from minutes', () => {
        const dateTime: DateTime = DateTime.fromMinutes(62);
        expect(dateTime.value.getUTCHours()).toBe(1, 'wrong hour');
        expect(dateTime.value.getUTCMinutes()).toBe(2, 'wrong minute');
        expect(dateTime.totalMinutes).toBe(62, 'wrong total minutes');
    });

    it('should subtract date times', () => {
        const dateTime: DateTime = new DateTime(new Date());
        expect(dateTime.subtract(DateTime.fromMinutes(2)).totalMinutes).toBe(
            dateTime.totalMinutes - 2,
            'wrong subtraction'
        );
    });
});
