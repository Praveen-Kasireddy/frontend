import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export function slideDownAnimation(duration: number = 400) {
    return trigger('slideDown', [
        state('void', style({ transform: 'translateY(-100%)' })),
        state('*', style({ transform: 'translateY(0)' })),
        transition(
            'void => *',
            animate(duration + 'ms cubic-bezier(.5,0,.5,1)')
        )
    ]);
}
