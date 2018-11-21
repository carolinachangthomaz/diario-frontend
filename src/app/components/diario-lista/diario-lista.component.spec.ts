import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioListaComponent } from './diario-lista.component';

describe('DiarioListaComponent', () => {
  let component: DiarioListaComponent;
  let fixture: ComponentFixture<DiarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
