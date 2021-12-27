import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHomeDivComponent } from './about-home-div.component';

describe('AboutHomeDivComponent', () => {
  let component: AboutHomeDivComponent;
  let fixture: ComponentFixture<AboutHomeDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHomeDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHomeDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
