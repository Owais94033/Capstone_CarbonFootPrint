import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidivComponent } from './aidiv.component';

describe('AidivComponent', () => {
  let component: AidivComponent;
  let fixture: ComponentFixture<AidivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AidivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AidivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
