/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkTimeLabelComponent } from './work-time-label.component';

describe('WorkTimeLabelComponent', () => {
  let component: WorkTimeLabelComponent;
  let fixture: ComponentFixture<WorkTimeLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [WorkTimeLabelComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
