import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappManageAdsComponent } from './myapp-manage-ads.component';

describe('MyappManageAdsComponent', () => {
  let component: MyappManageAdsComponent;
  let fixture: ComponentFixture<MyappManageAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappManageAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappManageAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
