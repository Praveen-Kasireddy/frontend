import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
import { AnimationFromTo } from './animation.interface';

/**
 * TODO: investigate issue with this animation
 * I've removed this animation for now because it's causing issues on kpmg environments.
 * I suspect that it's because of the constants which are passed to the animations.
 * They seem to not work well with AOT although not sure why only on kpmg env.
 * Possible solution would be to export the constants and see if they work correctly on kpmg envs.
 */

export const triggerName: string = 'dynamicWidth';

export function dynamicWidthAnimation(
    durationOut: number = 300,
    durationIn: number = 300,
    { from = {}, to = {} }: AnimationFromTo,
    delay: number = 0
) {
    return trigger(triggerName, [
        state('void', style({ ...from, width: '0' })),
        state('*', style({ ...to, width: '*' })),
        transition(
            'void => *',
            animate(
                durationOut + 'ms ' + delay + 'ms cubic-bezier(0.25, 0.6, 0, 1)'
            )
        ),
        transition(
            '* => void',
            animate(
                durationIn + 'ms ' + delay + 'ms cubic-bezier(0, 0, 0.2, 1)'
            )
        )
    ]);
}
