import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturientInstitutComponent } from './abiturient-institut.component';

describe('AbiturientInstitutComponent', () => {
  let component: AbiturientInstitutComponent;
  let fixture: ComponentFixture<AbiturientInstitutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiturientInstitutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturientInstitutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
