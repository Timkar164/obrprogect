import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsEdCatalogComponent } from './adults-ed-catalog.component';

describe('AdultsEdCatalogComponent', () => {
  let component: AdultsEdCatalogComponent;
  let fixture: ComponentFixture<AdultsEdCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultsEdCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultsEdCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
