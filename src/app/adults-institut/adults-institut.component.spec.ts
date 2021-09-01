import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsInstitutComponent } from './adults-institut.component';

describe('AdultsInstitutComponent', () => {
  let component: AdultsInstitutComponent;
  let fixture: ComponentFixture<AdultsInstitutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultsInstitutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultsInstitutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
