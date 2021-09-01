import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDescriptorFormComponent } from './ingredient-descriptor-form.component';

describe('IngredientDescriptorFormComponent', () => {
  let component: IngredientDescriptorFormComponent;
  let fixture: ComponentFixture<IngredientDescriptorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientDescriptorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDescriptorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
