// tslint:disable:max-line-length
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
// tslint:enable:max-line-length

export const triggerName: string = 'slideIn';

export function slideInAnimation(duration: number = 150) {
    return trigger(triggerName, [
        state('*', style({ height: '*', opacity: '1' })),
        state('void', style({ height: '0', opacity: '0' })),
        transition('* => *', animate(duration))
    ]);
}
