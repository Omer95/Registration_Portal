import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationFormComponent } from './delegation-form.component';

describe('DelegationFormComponent', () => {
  let component: DelegationFormComponent;
  let fixture: ComponentFixture<DelegationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
