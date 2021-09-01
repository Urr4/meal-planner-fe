import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from 'src/model/ingredient';
import { IngredientDescriptor } from 'src/model/ingredient-descriptor';
import { Unit } from 'src/model/units';
import { Observable } from 'rxjs';
import { tap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ingredient-descriptor-form',
  templateUrl: './ingredient-descriptor-form.component.html',
  styleUrls: ['./ingredient-descriptor-form.component.sass']
})
export class IngredientDescriptorFormComponent implements OnInit {

  loading: boolean = false;

  @Input() ingredientDescriptor?: IngredientDescriptor;

  ingredientControl: FormControl = new FormControl();
  unitControl: FormControl = new FormControl();

  ingredients: Ingredient[] = [];
  filteredIngredients?: Observable<Ingredient[]>;

  units: string[] = new Unit().names;
  filteredUnits?: Observable<string[]>;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.ingredientService.getAllIngredients().subscribe(
          ingredients => {
            this.ingredients = ingredients;
            this.loading = false;
            this.filteredIngredients = this.ingredientControl.valueChanges
              .pipe(
                startWith(''),
                map(value => typeof value === 'string' ? value : value.name),
                map(name => name ? this._filterIngredients(name) : this.ingredients.slice())
              );
          }
        );
    this.filteredUnits = this.unitControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterUnits(name) : this.units.slice())
      );
  }

  private _filterIngredients(name: string): Ingredient[] {
    const filterValue = name.toLowerCase();
    return this.ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(filterValue));
  }

  private _filterUnits(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.units.filter(unit => unit.toLowerCase().includes(filterValue));
  }

  displayFn(ingredient: Ingredient): string {
    return ingredient && ingredient.name ? ingredient.name : '';
  }

}
