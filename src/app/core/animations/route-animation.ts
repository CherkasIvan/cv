import {
    animate,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

// export const fadeAnimation = trigger('fadeAnimation', [
//     transition('* <=> *', [
//         query(
//             ':enter',
//             [style({ opacity: 0 })],
//             // { optional: true }
//         ),
//         group([
//             query(
//                 ':leave',
//                 [animate(500, style({ opacity: 0 }))],
//                 // {
//                 //     optional: true
//                 // }
//             ),
//             query(
//                 ':enter',
//                 [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))],
//                 // { optional: true }
//             ),
//         ]),
//     ]),
// ]);

export const routeAnimations = trigger('routeAnimations', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
            ':leave',
            [
                style({ opacity: 1 }),
                animate('0.3s', style({ opacity: 0, visibility: 'hidden' })),
            ],
            // { optional: true },
        ),
        query(
            ':enter',
            [
                style({ opacity: 0, visibility: 'visible' }),
                animate('0.3s', style({ opacity: 1 })),
            ],
            // { optional: true },
        ),
    ]),
]);
// другие переходы
