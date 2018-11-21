import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioCadastroComponent } from './diario-cadastro.component';

describe('DiarioCadastroComponent', () => {
  let component: DiarioCadastroComponent;
  let fixture: ComponentFixture<DiarioCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
