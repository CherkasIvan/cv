import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaButtonComponent } from './media-button.component';

describe('MediaButtonComponent', () => {
  let component: MediaButtonComponent;
  let fixture: ComponentFixture<MediaButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaButtonComponent]
    });
    fixture = TestBed.createComponent(MediaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
