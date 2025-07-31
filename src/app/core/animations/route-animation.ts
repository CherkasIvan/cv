import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true },
        ),
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(':leave', [style({ opacity: 1 })], { optional: true }),
        group([
            query(
                ':leave',
                [animate('600ms ease-out', style({ opacity: 0 }))],
                { optional: true },
            ),
            query(':enter', [animate('600ms ease-in', style({ opacity: 1 }))], {
                optional: true,
            }),
        ]),
    ]),
]);
