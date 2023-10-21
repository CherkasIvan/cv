import {
	animate,
	group,
	query,
	style,
	transition,
	trigger
} from "@angular/animations";

export const routeStateTrigger = trigger('routeState', [
	transition('* <=> *', [
		query(':enter, :leave',
			[
				style({ position: 'fixed', width: '100%', opacity: 0 })
			],
			{ optional: true }),
		group([
			query(':enter',
				[
					style({ opacity: 0 }),
					animate('0.5s', style({ opacity: 1 }))
				],
				{ optional: true }),

		])
	])
]);