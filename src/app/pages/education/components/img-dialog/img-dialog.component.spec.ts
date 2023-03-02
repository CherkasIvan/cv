import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDialogComponent } from './img-dialog.component';

describe('ImgDialogComponent', () => {
  let component: ImgDialogComponent;
  let fixture: ComponentFixture<ImgDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
