import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerciaComponent } from './commercia.component';

describe('CommerciaComponent', () => {
  let component: CommerciaComponent;
  let fixture: ComponentFixture<CommerciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
