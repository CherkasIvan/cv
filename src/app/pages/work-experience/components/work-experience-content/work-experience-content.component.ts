import { Component } from '@angular/core';
import { workExperience } from 'src/assets/constants/work-experience';
import * as moment from 'moment';

@Component({
  selector: 'cv-work-experience-content',
  templateUrl: './work-experience-content.component.html',
  styleUrls: ['./work-experience-content.component.scss'],
})
export class WorkExperienceContentComponent {
  public workPlace = workExperience;
  public workExp: any[] = [];

  public totalWorkTime(from: string, to: string) {
    const dateFromFormat = moment(from, 'DD-MM-YYYY');
    const dateToFormat = moment(to, 'DD-MM-YYYY');

    if (to === 'present time' || to === 'по настоящее время') {
      const today = moment(new Date()).format('DD-MM-YYYY');
      const now = moment(today, 'DD-MM-YYYY');
      const diff = moment(now).diff(moment(dateFromFormat), 'days');
      return this.workTimeFormat(diff);
    } else {
      const diff = moment(dateToFormat).diff(moment(dateFromFormat), 'days');
      return this.workTimeFormat(diff);
    }
  }

  public workTimeFormat(days: number) {
    const months = Math.ceil(days / 30);
    let yearsActual;
    let actualWorkTime;
    let monthActual = months;

    if (months >= 12) {
      yearsActual = Math.round(months / 12);
      monthActual = months - yearsActual * 12;
      actualWorkTime =
        (yearsActual === 1
          ? `${yearsActual} год`
          : `${yearsActual} года` && monthActual < 5) +
        ' ' +
        (monthActual < 5 && monthActual > 1
          ? `${monthActual} месяца`
          : `${monthActual} месяцев`);
    } else {
      actualWorkTime =
        monthActual < 5 && monthActual > 1
          ? `${monthActual} месяца`
          : `${monthActual} месяцев`;
    }
    return actualWorkTime;
  }

  ngOnInit() {
    this.workPlace.forEach((work) =>
      this.workExp.push(this.totalWorkTime(work.from, work.to))
    );
    console.log(this.workExp);
  }
}
