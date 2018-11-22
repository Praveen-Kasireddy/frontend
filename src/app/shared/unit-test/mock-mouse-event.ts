export class MockMouseEvent {
    public create(typeArg: string): MouseEvent {
        const event = document.createEvent('MouseEvent');
        event.initMouseEvent(
            typeArg,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        );
        return event;
    }
}
