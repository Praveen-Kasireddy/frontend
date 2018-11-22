import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const triggerName: string = 'fadeOut';

export function fadeOutAnimation(duration: number = 200) {
    return trigger(triggerName, [
        state('*', style({ opacity: '1' })),
        transition('* => void', animate(duration, style({ opacity: '0' })))
    ]);
}
