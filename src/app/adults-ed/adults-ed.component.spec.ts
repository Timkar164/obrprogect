import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsEdComponent } from './adults-ed.component';

describe('AdultsEdComponent', () => {
  let component: AdultsEdComponent;
  let fixture: ComponentFixture<AdultsEdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultsEdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultsEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
