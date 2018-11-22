import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const triggerName: string = 'fadeInOut';

export function fadeInOutAnimation(duration: number = 200) {
    return trigger(triggerName, [
        state('*', style({ opacity: '1' })),
        state('void', style({ opacity: '0' })),
        transition(
            '* <=> void',
            animate(duration + 'ms cubic-bezier(0.7, 0, 0.3, 1)')
        )
    ]);
}
