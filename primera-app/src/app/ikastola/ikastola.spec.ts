import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ikastola } from './ikastola';

describe('Ikastola', () => {
  let component: Ikastola;
  let fixture: ComponentFixture<Ikastola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ikastola],
    }).compileComponents();

    fixture = TestBed.createComponent(Ikastola);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
