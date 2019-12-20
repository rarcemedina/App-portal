import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDonaComponent } from './materia-dona.component';

describe('MateriaDonaComponent', () => {
  let component: MateriaDonaComponent;
  let fixture: ComponentFixture<MateriaDonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaDonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
