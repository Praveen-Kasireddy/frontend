import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const triggerName: string = 'scaleInOut';
export const visibleStateName: string = 'visible';
export const hiddenStateName: string = 'hidden';

export function scaleInOutAnimation(
    duration: number = 250,
    minScale: number = 0
) {
    return trigger(triggerName, [
        state(visibleStateName, style({ opacity: 1, transform: 'scale(1.0)' })),
        state(
            'void, ' + hiddenStateName,
            style({ opacity: 0, transform: 'scale(' + minScale + ')' })
        ),
        transition(
            '* => ' + visibleStateName,
            animate(duration + 'ms cubic-bezier(1, 0, 0.75, 0.9)')
        ),
        transition(
            visibleStateName + ' => *',
            animate(duration + 'ms cubic-bezier(0.25, -0.1, 0, 1)')
        )
    ]);
}
