import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { IWorkExperience } from '@shared/models/work-experience.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { ITotalWorkTime } from '@app/shared/models/total-work-time.interface';

@Component({
    selector: 'cv-work-experience-content',
    templateUrl: './work-experience-content.component.html',
    styleUrls: ['./work-experience-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, NgClass, AsyncPipe],
})
export class WorkExperienceContentComponent implements OnInit {
    public workPlace$: Observable<IWorkExperience[]> =
        this._firebaseService.getWorkExperience();
    public workExp: ITotalWorkTime[] = [];
    public totalWorkTime: ITotalWorkTime = { years: 0, month: 0, days: 0 };

    constructor(private readonly _firebaseService: FirebaseService) {}

    private _parseDate(date: string[]) {
        {
            let workDate: number;
            if (date[0] !== 'Present time') {
                const day = +date[0];
                const month = +date[1];
                const year = +date[2];
                workDate = new Date(year, month, day).getTime();
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
        let singleWorkTerm: ITotalWorkTime;
        singleWorkTerm = {
            years: difference.getUTCFullYear() - 1970,
            month: difference.getUTCMonth() + 1,
            days: difference.getUTCDate() - 1,
        };
        this.workExp.push(singleWorkTerm);
    }

    private _totalWorkTerm(workExp: ITotalWorkTime[]) {
        let result: ITotalWorkTime = { years: 0, month: 0, days: 0 };
        workExp.forEach((work: ITotalWorkTime) => {
            result.years += work.years;
            result.month += work.month;
            result.days += work.days;
        });
        result.years += Math.floor(result.month / 12);
        result.month = result.month % 12;
        result.month += Math.floor(result.days / 31);
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
