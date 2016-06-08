var dogFoodJSON = new XMLHttpRequest();

dogFoodJSON.addEventListener('load', parseDogFoodJSON);
dogFoodJSON.addEventListener('error', jsonError);

dogFoodJSON.open('GET', 'dogfood.json');
dogFoodJSON.send();


var catFoodJSON = new XMLHttpRequest();

catFoodJSON.addEventListener('load', function () {
  outputDiv = document.getElementById('output');
});
catFoodJSON.addEventListener('load', parseCatFoodJSON);
catFoodJSON.addEventListener('error', jsonError);

catFoodJSON.open('GET', 'catfood.json');
catFoodJSON.send();




function jsonError () {
	let outputDiv = document.getElementById('output');
	outputDiv.innerHTML += `<h1>Error 404 file not found</h1>`;
}




function parseDogFoodJSON (progressEvent) {
	var outputDiv = document.getElementById('output');
	let parsedData = JSON.parse(progressEvent.target.responseText);
	let newHTMLString = '';

	for (var index = 0, l = parsedData.dog_brands.length; index < l; index++) {
		var	value = parsedData.dog_brands[index];
		let foodBrand = value.name;
			newHTMLString += `<petcard class="petcard">
													<header>
														<h3 id="foodBrand">${foodBrand}</h3>
													</header>
													<productimg id="imgBox">
														<img src="http://www.azic.com/wp-content/uploads/2013/09/dog-food.jpg" />
													</productimg>

													<info id="infoBox">
													<header>
														<h5>Types:</h5>
													</header>`;

			for (var j = 0, x = value.types.length; j < x; j++) {
				var foodTypeObj = value.types[j];
				let foodType = value.types[j].type;
				newHTMLString += `	<div class="priceBox">
																				<h6>${foodType}</h6>`;

				for (var y = 0, z = foodTypeObj.volumes.length; y < z; y++) {
					var foodPriceObj = foodTypeObj.volumes[y];
					let foodSize = foodPriceObj.name;
					let foodPrice = foodPriceObj.price;
					newHTMLString += `        <ul>
																						<li class="productSize">${foodSize}</li>
																						<li class="productPrice">${foodPrice}</li>
																					</ul>`;
		  }
		  newHTMLString += `</div>`;
	  }
	  newHTMLString += `</petcard>`;
	}
	outputDiv.innerHTML += newHTMLString;
}






function parseCatFoodJSON () {
	var outputDiv = document.getElementById('output');
	var parsedData = JSON.parse(this.responseText);
	var catData = parsedData.cat_brands;
	var htmlString = '';
	// console.log(parsedData.cat_brands);

	for (var i = 0, j = catData.length; i < j; i++) {
		var catBrands = catData[i];
		var catBrandLabel = catBrands.brand;
			console.log(catBrandLabel);
			htmlString += `<div class="catFood">
											<h2>${catBrandLabel}</h2>`;

		for (var x = 0, y = catBrands.breeds.length; x < y; x++) {
			var catBreeds = catBrands.breeds[x];
			var catBreedLabel = catBreeds.breed;
			var catVolumes = catBreeds.volumes;
				console.log(catBreedLabel);
				htmlString += `<div id="catData">
												<h5>${catBreedLabel}</h5>`;
			for (var a = 0, b = catVolumes.length; a < b; a++) {
				var catFoodData = catVolumes[a];
				var catName = catFoodData.name;
				var catPrice = catFoodData.price;
				htmlString += `<p>${catName} :: ${catPrice}</p>`;
			}
			htmlString += `</div>`;
		}
		htmlString += `</div>`;
	  outputDiv.innerHTML += htmlString;
	}
}

































































/**********************

solution from Dan

***********************/




// function parseAfterLoaded() {
//   outputDiv; //loads selectedDiv into memory before it changes value
//   var data = JSON.parse(event.target.responseText);   //get and parse JSON data file
//   var newHTML = "";  //newHTML will be the final result added to the DOM

//   //the following loops through every object in the JSON file, breaking each one down until it gets to its end value, then adds those key-value pairs to newHTML 
//  for (var item in data) {
//     newHTML += `<h3>${item}:</h3>`
//   function breakDownJSON (y) {
//     for (var x in y) {
//       var newVar = y[x];
//       if (newVar.constructor !== Array && newVar.constructor !== Object) {
//         newHTML += `<p>${x}: ${newVar}</p>`;
//       } else {
//           breakDownJSON(newVar);
//         }
//     }
//   } 
//     breakDownJSON(data[item]);
//   }
//   //we define selectedDiv below
//   outputDiv.innerHTML += newHTML;
// }






/******************

output build html string

******************/


// outputDiv.innerHTML += `<petcard class="petcard">
// 																				<header>
// 																					<h3 id="foodBrand">${foodBrand}</h3>
// 																				</header>
// 																				<productimg id="imgBox">
// 																					<img src="http://www.azic.com/wp-content/uploads/2013/09/dog-food.jpg" />
// 																				</productimg>

// 																				<info id="infoBox">
// 																				<header>
// 																					<h5>Types:</h5>
// 																				</header>

// 																				<div class="priceBox">
// 																				<h6>${foodType}</h6>
// 																					<ul>
// 																						<li class="productSize">${foodSize}</li>
// 																						<li class="productPrice">${foodPrice}</li>
// 																					</ul>
// 																				</div>
																								
// 																				</info>
// 																			</petcard>`;



















				