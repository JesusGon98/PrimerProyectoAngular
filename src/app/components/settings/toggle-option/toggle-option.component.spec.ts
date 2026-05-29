import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleOptionComponent } from './toggle-option.component';

describe('ToggleOptionComponent', () => {
  let component: ToggleOptionComponent;
  let fixture: ComponentFixture<ToggleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleOptionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
