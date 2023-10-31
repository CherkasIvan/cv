import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
} from '@angular/core';
import { INavigation } from '@shared/models/navigation.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'cv-navigation-panel',
    templateUrl: './navigation-panel.component.html',
    styleUrls: ['./navigation-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent {
    public navigation$: Observable<INavigation[]> =
        this._firebaseService.getNavigation();
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        //In chrome and some browser scroll is given to body tag
        let pos =
            (document.documentElement.scrollTop || document.body.scrollTop) +
            document.documentElement.offsetHeight;
        let max = document.documentElement.scrollHeight;
        // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
        if (pos == max) {
            console.log('scroll');
        }
    }
    checkScroll() {
        this.onWindowScroll();
    }
    constructor(private readonly _firebaseService: FirebaseService) {}
}
