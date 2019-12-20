import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionDonaComponent } from './extension-dona.component';

describe('ExtensionDonaComponent', () => {
  let component: ExtensionDonaComponent;
  let fixture: ComponentFixture<ExtensionDonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionDonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
