import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilterAdsComponent } from './show-filter-ads.component';

describe('ShowFilterAdsComponent', () => {
  let component: ShowFilterAdsComponent;
  let fixture: ComponentFixture<ShowFilterAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFilterAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFilterAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
