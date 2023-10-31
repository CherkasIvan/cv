import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IWorkExperience } from '@shared/models/work-experience.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
    selector: 'cv-work-experience-content',
    templateUrl: './work-experience-content.component.html',
    styleUrls: ['./work-experience-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceContentComponent {
    public workPlace$: Observable<IWorkExperience[]> =
        this._firebaseService.getWorkExperience();
    public workExp: number[] = [];
    public totalWorkTimeEverInMonth!: number;
    public totalWorkTimeEverConverted!: string;

    constructor(private readonly _firebaseService: FirebaseService) {}

    // public totalWorkTime(from: string, to: string) {
    //   const dateFromFormat = moment(from, 'DD-MM-YYYY');
    //   const dateToFormat = moment(to, 'DD-MM-YYYY');

    //   if (to === 'present time' || to === 'по настоящее время') {
    //     const today = moment(new Date()).format('DD-MM-YYYY');
    //     const now = moment(today, 'DD-MM-YYYY');
    //     const diff = moment(now).diff(moment(dateFromFormat), 'days');
    //     return this.workTimeFormat(diff);
    //   } else {
    //     const diff = moment(dateToFormat).diff(moment(dateFromFormat), 'days');
    //     return this.workTimeFormat(diff);
    //   }
    // }

    // public workTimeFormat(days: number) {
    //   const months = Math.ceil(days / 30);
    //   this.workExp.push(months);
    //   let yearsActual;
    //   let actualWorkTime;
    //   let monthActual = months;

    //   if (months >= 12) {
    //     yearsActual = Math.round(months / 12);
    //     monthActual = months - yearsActual * 12;
    //     actualWorkTime =
    //       (yearsActual === 1
    //         ? `${yearsActual} год`
    //         : `${yearsActual} года` && monthActual < 5) +
    //       ' ' +
    //       (monthActual < 5 && monthActual > 1
    //         ? `${monthActual} месяца`
    //         : `${monthActual} месяцев`);
    //   } else {
    //     actualWorkTime =
    //       monthActual < 5 && monthActual > 1
    //         ? `${monthActual} месяца`
    //         : `${monthActual} месяцев`;
    //   }
    //   return actualWorkTime;
    // }

    // private countAndConvertTotalWorkTime(time: number) {
    //   const years = Math.trunc(time / 12);
    //   const months = time % 12;
    //   let currentYear;
    //   let currentMonths;
    //   if (years === 1) {
    //     currentYear = `${years} год`;
    //   }
    //   if (years > 4) {
    //     currentYear = `${years} лет`;
    //   } else {
    //     currentYear = `${years} года`;
    //   }

    //   if (months === 1) {
    //     currentMonths = `${months} месяц`;
    //   }
    //   if (months > 1 && months < 5) {
    //     currentMonths = `${months} месяца`;
    //   } else {
    //     currentMonths = `${months} месяцев`;
    //   }
    //   this.totalWorkTimeEverConverted = currentYear + ' ' + currentMonths;
    // }

    // ngOnInit(): void {
    // tap(workPlaces => { workPlaces.forEach(work => work.workTime = this.totalWorkTime)
    // this.totalWorkTimeEverInMonth = this.workExp.reduce((start, end) => start + end,0)
    // })
    // workPlaces.forEach((work) => {
    //   work.workTime = this.totalWorkTime(work.from, work.to);
    // });
    // this.totalWorkTimeEverInMonth = this.workExp.reduce(
    //   (start: number, end: number) => start + end,
    //   0
    // ))
    // this.countAndConvertTotalWorkTime(this.totalWorkTimeEverInMonth);
    // }
}
