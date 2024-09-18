import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateselectorComponent } from './dateselector.component';

describe('DateselectorComponent', () => {
  let component: DateselectorComponent;
  let fixture: ComponentFixture<DateselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
