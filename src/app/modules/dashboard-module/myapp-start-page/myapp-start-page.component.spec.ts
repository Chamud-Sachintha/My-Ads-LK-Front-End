import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappStartPageComponent } from './myapp-start-page.component';

describe('MyappStartPageComponent', () => {
  let component: MyappStartPageComponent;
  let fixture: ComponentFixture<MyappStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappStartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
