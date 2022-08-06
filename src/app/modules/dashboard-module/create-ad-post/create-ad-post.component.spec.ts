import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdPostComponent } from './create-ad-post.component';

describe('CreateAdPostComponent', () => {
  let component: CreateAdPostComponent;
  let fixture: ComponentFixture<CreateAdPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
