import { Ingredient } from 'src/model/ingredient';

export class IngredientDescriptor {
	id?: number
	unit?: string
	amount?: number
  ingredient: Ingredient

	constructor(ingredient: Ingredient){
	  this.ingredient = ingredient;
	}

}
