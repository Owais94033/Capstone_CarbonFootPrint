import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtofillComponent } from './formtofill.component';

describe('FormtofillComponent', () => {
  let component: FormtofillComponent;
  let fixture: ComponentFixture<FormtofillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormtofillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
