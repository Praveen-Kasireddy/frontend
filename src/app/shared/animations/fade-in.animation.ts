import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const triggerName: string = 'fadeIn';

export function fadeInAnimation(duration: number = 200) {
    return trigger(triggerName, [
        state('void', style({ opacity: '0' })),
        transition(
            'void => *',
            animate(
                duration + 'ms cubic-bezier(0.3, 0, 0.7, 1)',
                style({ opacity: '1' })
            )
        )
    ]);
}
