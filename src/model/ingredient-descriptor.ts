import { Ingredient } from 'src/model/ingredient';

export class IngredientDescriptor {
	id?: number
	unit?: string
	amount?: number
  ingredient: Ingredient
  type: string

	constructor(ingredient: Ingredient, type: string){
	  this.ingredient = ingredient;
	  this.type = type;
	}

}
