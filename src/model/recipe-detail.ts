import { IngredientDescriptor } from 'src/model/ingredient-descriptor';

export class RecipeDetail {
	id: number
	name: string
	description: string
	ingredientDescriptors: IngredientDescriptor[]

	constructor(id: number, name: string, description: string, ingredientDescriptors: IngredientDescriptor[]){
		this.id = id
		this.name = name
		this.description = description
		this.ingredientDescriptors = ingredientDescriptors
	}

}
