import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ModalOutletComponent } from '@app/layout/components/modal-outlet/modal-outlet.component';

import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    exports: [LayoutComponent],
    imports: [
        LayoutRoutingModule,
        MatTableModule,
        CommonModule,
        SpinnerComponent,
        BackgroundsComponent,
        ModalOutletComponent,
        LayoutComponent,
    ],
})
export class LayoutModule {}
