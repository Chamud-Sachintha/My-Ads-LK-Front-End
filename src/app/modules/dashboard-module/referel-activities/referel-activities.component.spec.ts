import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferelActivitiesComponent } from './referel-activities.component';

describe('ReferelActivitiesComponent', () => {
  let component: ReferelActivitiesComponent;
  let fixture: ComponentFixture<ReferelActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferelActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferelActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
