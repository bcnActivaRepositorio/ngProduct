export class Producto {
	// properties
	_id?:     number;
	name:     string;
	category: string;
	location: string;
	price:    number;


	constructor(name: string, category: string, location: string, price: number){
		// assignament properties/parameters
		this.name 	  = name;
		this.category = category;
		this.location = location;
		this.price 	  = price;

	}
	// setters & getters?
}
