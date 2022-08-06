import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeelAllAdsComponent } from './seel-all-ads.component';

describe('SeelAllAdsComponent', () => {
  let component: SeelAllAdsComponent;
  let fixture: ComponentFixture<SeelAllAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeelAllAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeelAllAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
