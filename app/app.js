var campingSupplies = [
   {
     "name": "Tent",
     "thumb":"tent-150.png",
     "full":"tent.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 100.00,
   },
   {
     "name": "Sleeping Bag",
     "thumb":"bag-150.png",
     "full":"bag.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 50.00,
   },
   {
     "name": "Camp Stove",
     "thumb":"stove-150.png",
     "full":"stove.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 50.00,
   },
   {
     "name": "Cooler",
     "thumb":"cooler-150.png",
     "full":"cooler.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 40.00,
   },
   {
     "name": "Camp Chair",
     "thumb":"chair-150.png",
     "full":"chair.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 25.00,
   },
   {
     "name": "Headlamp",
     "thumb":"lamp-150.png",
     "full":"lamp.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 30.00,
   },
   {
     "name": "Insect Repellent",
     "thumb":"spray-150.png",
     "full":"spray.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 10.00,
   },
   {
     "name": "Folding Table",
     "thumb":"table-150.png",
     "full":"table.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 60.00,
   },
   {
     "name": "Backpack",
     "thumb":"bag-150.png",
     "full":"bag.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 90.00,
   },
   {
     "name": "Camp Cookware",
     "thumb":"cook-150.png",
     "full":"cook.png",
     "breifDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     "fullDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus veritatis aliquam porro asperiores inventore eveniet ullam voluptatem natus consequuntur praesentium. Culpa, soluta expedita. Dolore consequuntur tempore dignissimos illum blanditiis.",
     "price": 45.00,
   }
 ];

function loadData (){
  $.each(campingSupplies, function(index, camping){
    console.log(camping.name);

  $("#app").append(` 
  <div id="${index}" class= "camp-holder">
  <h4>${camping.name}</h4>
  <div class="camp-img">
    <img src="images/thumb/${camping.thumb}" alt="" />
  </div>
  <div class="description"><span>Description: </span>${camping.breifDescription}</div>
  <div class="price"><span>Price: </span>${camping.price}</div>
  </div>
  `);

  })
  initlisteners();
}

function initlisteners(){
   $(".camp-holder").click(function(e){
      let campIndex = e.currentTarget.id;
      console.log(campIndex);

      $("#app").html(
         `
         <div class="wrapper">
         <div class= "camp">
         <h4>${campingSupplies[campIndex].name}</h4>
         <div class="camp-img">
           <img src="images/full/${campingSupplies[campIndex].full}" alt="" />
         </div>
         <div class="description "><span>Description: </span>${campingSupplies[campIndex].fullDescription}</div>
         <div class="price"><span>Price: </span>${campingSupplies[campIndex].price}</div>
         <button>Add to Cart</button>
         </div>
         </div>
         `
      )
   })
    
}




$(document).ready(function(){
    loadData();
});
