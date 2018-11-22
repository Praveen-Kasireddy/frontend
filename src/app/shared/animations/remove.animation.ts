// tslint:disable:max-line-length
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
// tslint:enable:max-line-length

export const triggerName: string = 'liftOff';

export function removeAnimation(duration: number = 180) {
    return trigger(triggerName, [
        state('*', style({ transform: 'scale(1)' })),
        state('void', style({ transform: 'scale(1.1)', opacity: 0 })),
        transition(
            '* => void',
            animate(duration + 'ms cubic-bezier(1, 0, 0.75, 0.9)')
        )
    ]);
}
