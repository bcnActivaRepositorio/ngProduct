import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedProductComponent } from './listed-product.component';

describe('ListedProductComponent', () => {
  let component: ListedProductComponent;
  let fixture: ComponentFixture<ListedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
