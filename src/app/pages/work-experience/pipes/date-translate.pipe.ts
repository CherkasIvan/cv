import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTranslate',
    standalone: true,
})
export class DateTranslatePipe implements PipeTransform {
    transform(
        value: number,
        singular: string,
        plural: string,
        plural2: string,
    ): string {
        if (value === 1) {
            return `${singular}`;
        } else if (value > 1 && value < 5) {
            return `${plural}`;
        } else {
            return `${plural2}`;
        }
    }
}
