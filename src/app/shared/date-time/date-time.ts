const millisXSecond: number = 1000;
const secondsXMinute: number = 60;
const millisXMinute: number = millisXSecond * secondsXMinute;

export class DateTime {
    value: Date;

    constructor(value: Date) {
        this.value = value;
    }

    static fromMinutes(value: number): DateTime {
        return new DateTime(new Date(value * millisXMinute));
    }

    static get now(): DateTime {
        return new DateTime(new Date());
    }

    subtract(value: DateTime): DateTime {
        return new DateTime(new Date(this.value.valueOf() - value.value.valueOf()));
    }

    get totalMinutes(): number {
        return this.value.valueOf() / millisXMinute;
    }
}
