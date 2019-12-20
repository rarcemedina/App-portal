import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasantiaDonaComponent } from './pasantia-dona.component';

describe('PasantiaDonaComponent', () => {
  let component: PasantiaDonaComponent;
  let fixture: ComponentFixture<PasantiaDonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasantiaDonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasantiaDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
