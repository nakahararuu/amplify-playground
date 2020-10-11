import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistProductFormComponent } from './regist-product-form.component';

describe('RegistProductFormComponent', () => {
  let component: RegistProductFormComponent;
  let fixture: ComponentFixture<RegistProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistProductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
