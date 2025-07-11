import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginscreen } from './loginscreen';

describe('Loginscreen', () => {
  let component: Loginscreen;
  let fixture: ComponentFixture<Loginscreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginscreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginscreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
