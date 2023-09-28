import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadColumnComponent } from './cv-item.component';

describe('DownloadColumnComponent', () => {
  let component: DownloadColumnComponent;
  let fixture: ComponentFixture<DownloadColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadColumnComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
