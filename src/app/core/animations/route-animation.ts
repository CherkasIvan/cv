import {
    animate,
    animateChild,
    group,
    query,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
        query(
            ':enter',
            [style({ opacity: 0 })]
            // { optional: true }
        ),
        group([
            query(
                ':leave',
                [animate(500, style({ opacity: 0 }))]
                // {
                //     optional: true
                // }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]
                // { optional: true }
            )
        ])
    ])
]);


export const fadeIn: any = trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('0.2s', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('0.2s', style({opacity: 0}))
    ])
  ]);
  
  export const fadeDelay: any = trigger('fadeDelay', [
    transition(':enter', [
      style({opacity: 0}),
      animate('0.4s 0.4s', style({opacity: 1}))])
  ]);

  

  trigger( 'theParentAnimation', [
    state( 'down', style( {
      transform: 'translateY( 100% ) translateZ( 0 )',
    } ) ),
    transition( '* <=> *', [
      group( [
        query( ':self', [
          animate( '0.9s cubic-bezier(0.55, 0.31, 0.15, 0.93)' ),
        ] ),
        query( '@theChildAnimation', animateChild() ),
      ] ),
    ] ),
  ] ),


  
  trigger( 'theChildAnimation', [
    state( 'down', style( {
      transform: 'translateY( 100% ) translateZ( 0 )',
    } ) ),
    transition( '* <=> *', [
      animate( '0.9s cubic-bezier(0.55, 0.31, 0.15, 0.93)' ),
    ] ),
  ] )