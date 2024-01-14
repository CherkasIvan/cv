import { TranslateModule } from '@ngx-translate/core';
import { Observable, tap } from 'rxjs';

import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ITotalWorkTime } from '@shared/models/total-work-time.interface';
import { IWorkExperience } from '@shared/models/work-experience.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { EWorkExperienceLabel } from '@utils/enum/work-experience-label.enum';

import { WorkTimeLabelComponent } from '../work-time-label/work-time-label.component';

@Component({
    selector: 'cv-work-experience-content',
    templateUrl: './work-experience-content.component.html',
    styleUrls: ['./work-experience-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        AsyncPipe,
        TranslateModule,
        WorkTimeLabelComponent,
    ],
})
export class WorkExperienceContentComponent implements OnInit {
    public workPlace$: Observable<IWorkExperience[]> =
        this._firebaseService.getWorkExperience();
    public workExp: ITotalWorkTime[] = [];
    public totalWorkTime: ITotalWorkTime = {
        years: 0,
        yearsLabel: '',
        months: 0,
        monthsLabel: '',
        days: 0,
        daysLabel: '',
    };

    constructor(private readonly _firebaseService: FirebaseService) {}

    private _parseDate(date: string[]) {
        {
            let workDate: number;
            if (date[0] !== 'Present time') {
                const day = +date[0];
                const months = +date[1];
                const year = +date[2];
                workDate = new Date(year, months, day).getTime();
            } else {
                workDate = new Date().getTime();
            }
            return workDate;
        }
    }

    private _workTerm(workStartEnd: { workStart: number; workEnd: number }) {
        const difference: Date = new Date(
            Math.abs(workStartEnd.workEnd - workStartEnd.workStart),
        );
        let singleWorkTerm: ITotalWorkTime = {
            years: 0,
            yearsLabel: '',
            months: 0,
            monthsLabel: '',
            days: 0,
            daysLabel: '',
        };
        singleWorkTerm = {
            years: difference.getUTCFullYear() - 1970,
            yearsLabel: this._setPeriodLabel(
                difference.getUTCFullYear() - 1970,
                'years',
            ),
            months: difference.getUTCMonth() + 1,
            monthsLabel: this._setPeriodLabel(
                difference.getUTCMonth() + 1,
                'months',
            ),
            days: difference.getUTCDate() - 1,
            daysLabel: this._setPeriodLabel(
                difference.getUTCDate() - 1,
                'days',
            ),
        };
        this.workExp.push(singleWorkTerm);
    }

    private _getPeriodKey(period: number, label: string) {
        return `${label}_${
            period === 1 ? 1 : period >= 2 && period <= 4 ? '2-4' : 'else'
        }`;
    }

    private _setPeriodLabel(period: number, label: string): string {
        return EWorkExperienceLabel[
            this._getPeriodKey(
                period,
                label,
            ) as keyof typeof EWorkExperienceLabel
        ];
    }

    private _totalWorkTerm(workExp: ITotalWorkTime[]) {
        const result: ITotalWorkTime = {
            years: 0,
            months: 0,
            days: 0,
        };
        workExp.forEach((work: ITotalWorkTime) => {
            result.years += work.years;
            result.months += work.months;
            result.days += work.days;
        });
        result.years += Math.floor(result.months / 12);
        result.months = result.months % 12;
        result.months += Math.floor(result.days / 31);
        result.days = result.days % 31;

        this.totalWorkTime = result;
    }

    ngOnInit(): void {
        this.workPlace$
            .pipe(
                tap((works: IWorkExperience[]) => {
                    works.map((echWorkStartEndTime: IWorkExperience) => {
                        const workStartEnd: {
                            workStart: number;
                            workEnd: number;
                        } = {
                            workStart: this._parseDate(
                                echWorkStartEndTime.from.split('-'),
                            ),
                            workEnd: this._parseDate(
                                echWorkStartEndTime.to.split('-'),
                            ),
                        };
                        this._workTerm(workStartEnd);
                        this._totalWorkTerm(this.workExp);
                    });
                }),
            )
            .subscribe();
    }
}
