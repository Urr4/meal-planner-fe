import { IngredientDescriptorRequest } from 'src/model/ingredient-descriptor-request';

export class UpdateRecipeRequest {
	name: string
	description: string
	ingredientDescriptors?: IngredientDescriptorRequest[]

	constructor(name: string, description: string){
		this.name = name
		this.description = description
	}

}
