import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }
    ),
    group([
      query(':leave', [
        animate(500, style({ opacity: 0 }))
      ],
        { optional: true }
      ),
      query(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ],
        { optional: true }
      )
    ])
  ])
]);
