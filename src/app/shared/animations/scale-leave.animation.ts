import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const triggerName: string = 'scaleLeave';

export function scaleLeaveAnimation(duration: number = 250) {
    return trigger(triggerName, [
        state('*', style({ transform: 'scale(1)' })),
        state('void', style({ transform: 'scale(0)' })),
        transition(
            '* => void',
            animate(duration + 'ms cubic-bezier(1, 0, 0.75, 0.9)')
        )
    ]);
}
