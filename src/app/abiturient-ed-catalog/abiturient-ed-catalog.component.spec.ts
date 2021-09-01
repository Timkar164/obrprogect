import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturientEdCatalogComponent } from './abiturient-ed-catalog.component';

describe('AbiturientEdCatalogComponent', () => {
  let component: AbiturientEdCatalogComponent;
  let fixture: ComponentFixture<AbiturientEdCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiturientEdCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturientEdCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
