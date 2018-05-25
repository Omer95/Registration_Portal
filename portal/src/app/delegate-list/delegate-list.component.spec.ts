import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateListComponent } from './delegate-list.component';

describe('DelegateListComponent', () => {
  let component: DelegateListComponent;
  let fixture: ComponentFixture<DelegateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
