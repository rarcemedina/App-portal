import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantiasListComponent } from './pasantias-list.component';

describe('PasantiasListComponent', () => {
  let component: PasantiasListComponent;
  let fixture: ComponentFixture<PasantiasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasantiasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasantiasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
