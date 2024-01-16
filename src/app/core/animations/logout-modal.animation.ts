import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const logoutModalAnimation = trigger('logoutModalAnimation', [
    state('in', style({ opacity: 1 })),
    state('out', style({ opacity: 0 })),
    transition('in => out', [animate('1s')]),
    transition('out => in', [animate('1s')]),
]);
