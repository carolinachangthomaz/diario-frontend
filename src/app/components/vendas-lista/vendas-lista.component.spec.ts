import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasListaComponent } from './vendas-lista.component';

describe('VendasListaComponent', () => {
  let component: VendasListaComponent;
  let fixture: ComponentFixture<VendasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
