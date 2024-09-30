import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetformComponent } from './gadgetform.component';

describe('GadgetformComponent', () => {
  let component: GadgetformComponent;
  let fixture: ComponentFixture<GadgetformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GadgetformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GadgetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
