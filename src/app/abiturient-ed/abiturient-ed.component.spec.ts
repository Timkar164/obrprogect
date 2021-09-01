import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturientEdComponent } from './abiturient-ed.component';

describe('AbiturientEdComponent', () => {
  let component: AbiturientEdComponent;
  let fixture: ComponentFixture<AbiturientEdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiturientEdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturientEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
