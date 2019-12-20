import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelatividadListComponent } from './correlatividad-list.component';

describe('CorrelatividadListComponent', () => {
  let component: CorrelatividadListComponent;
  let fixture: ComponentFixture<CorrelatividadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrelatividadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelatividadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
