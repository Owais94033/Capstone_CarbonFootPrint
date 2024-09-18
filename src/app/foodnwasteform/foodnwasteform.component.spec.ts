import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodnwasteformComponent } from './foodnwasteform.component';

describe('FoodnwasteformComponent', () => {
  let component: FoodnwasteformComponent;
  let fixture: ComponentFixture<FoodnwasteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodnwasteformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodnwasteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
