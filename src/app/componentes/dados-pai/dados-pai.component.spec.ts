import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPaiComponent } from './dados-pai.component';

describe('DadosPaiComponent', () => {
  let component: DadosPaiComponent;
  let fixture: ComponentFixture<DadosPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPaiComponent]
    });
    fixture = TestBed.createComponent(DadosPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
