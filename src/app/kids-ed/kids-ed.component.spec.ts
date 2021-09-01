import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsEdComponent } from './kids-ed.component';

describe('KidsEdComponent', () => {
  let component: KidsEdComponent;
  let fixture: ComponentFixture<KidsEdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsEdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
