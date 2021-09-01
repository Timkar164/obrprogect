import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsEdCatalogComponent } from './kids-ed-catalog.component';

describe('KidsEdCatalogComponent', () => {
  let component: KidsEdCatalogComponent;
  let fixture: ComponentFixture<KidsEdCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsEdCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsEdCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
