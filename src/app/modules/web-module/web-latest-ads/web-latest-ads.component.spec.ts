import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLatestAdsComponent } from './web-latest-ads.component';

describe('WebLatestAdsComponent', () => {
  let component: WebLatestAdsComponent;
  let fixture: ComponentFixture<WebLatestAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLatestAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLatestAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
