import { IngredientDescriptor } from 'src/model/ingredient-descriptor';

export class CreateRecipeRequest {
	name: string
	description: string
	createIngredientDescriptorRequest: IngredientDescriptor[]

	constructor(name: string, description: string, createIngredientDescriptorRequest: IngredientDescriptor[]){
		this.name = name
		this.description = description
		this.createIngredientDescriptorRequest = createIngredientDescriptorRequest
	}

}
