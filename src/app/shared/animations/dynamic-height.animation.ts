import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
import { AnimationStyleProps } from './animation.interface';

export const triggerName: string = 'dynamicHeight';

export function dynamicHeightAnimation(
    durationOut: number = 300,
    durationIn: number = 300,
    stylesFrom: AnimationStyleProps = {},
    stylesTo: AnimationStyleProps = {}
) {
    return trigger(triggerName, [
        state('void', style({ ...stylesFrom, height: '0' })),
        state('*', style({ ...stylesTo, height: '*' })),
        transition(
            'void => *',
            animate(durationOut + 'ms cubic-bezier(0.25, 0.6, 0, 1)')
        ),
        transition(
            '* => void',
            animate(durationIn + 'ms cubic-bezier(0, 0, 0.2, 1)')
        )
    ]);
}
