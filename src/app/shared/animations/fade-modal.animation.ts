import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const triggerName: string = 'fadeInOut';
export const visibleStateName: string = 'visible';
export const hiddenStateName: string = 'hidden';

export function fadeModalAnimation(
    durationIn: number = 240,
    durationOut: number = 180
) {
    return trigger(triggerName, [
        state(visibleStateName, style({ opacity: '1' })),
        state('void, ' + hiddenStateName, style({ opacity: '0' })),
        transition(
            '* => ' + visibleStateName,
            animate(durationIn + 'ms cubic-bezier(0.25, -0.1, 0, 1)')
        ),
        transition(
            visibleStateName + ' => *',
            animate(durationOut + 'ms cubic-bezier(1, 0, 0.75, 0.9)')
        )
    ]);
}
