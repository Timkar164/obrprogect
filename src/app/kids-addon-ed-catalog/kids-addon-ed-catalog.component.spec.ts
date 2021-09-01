import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsAddonEdCatalogComponent } from './kids-addon-ed-catalog.component';

describe('KidsAddonEdCatalogComponent', () => {
  let component: KidsAddonEdCatalogComponent;
  let fixture: ComponentFixture<KidsAddonEdCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsAddonEdCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsAddonEdCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
