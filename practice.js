/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.0, quantity: 1 },
  { name: "sugar", cost: 3.0, quantity: 0.5 },
  { name: "butter", cost: 1.0, quantity: 1 },
  { name: "apples", cost: 6.0, quantity: 7 },
  { name: "cinnamon", cost: 5.5, quantity: 1 },
  { name: "eggs", cost: 2.0, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.0, quantity: 1 },
  { name: "sugar", cost: 3.0, quantity: 0.5 },
  { name: "butter", cost: 1.0, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.5, quantity: 1 },
  { name: "eggs", cost: 2.0, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.0, quantity: 1 },
  { name: "sugar", cost: 3.0, quantity: 0.5 },
  { name: "butter", cost: 1.0, quantity: 1 },
  { name: "cherries", cost: 12.0, quantity: 10 },
  { name: "eggs", cost: 2.0, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe,
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

const findRecipe = (arg1, arg2, arg3) => {
  for (let i = 0; i < arg2; i++) {
    // Print the ingredients for each ingredient in the recipe
    let combiningMsg = `Combining ingredients for ${arg1}: `;
    combiningMsg += arg3.map((ingredient) => ingredient.name).join(", ");
    console.log(combiningMsg);

    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
};

const findPieTotalCost = (arg1, arg2) => {
  const costOfPie = arg1.reduce((prev, current) => {
    return prev + current.cost;
  }, arg1[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);
  const totalCost = costOfPie * arg2;
  return totalCost;
};

const findProfit = (arg1, arg2, arg3) => {
  const revenue = arg1 * (arg2 || 1.2);
  console.log(`Sold ${arg3} pies for $${revenue.toFixed(2)}!`);
};

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  // Find the recipe for the pieType specified
  const recipe = recipes[pieType];
  // Bake the number of pies specified by the pieQuantity
  findRecipe(pieType, pieQuantity, recipe);

  let totalCost = findPieTotalCost(recipe, pieQuantity);

  // Print the cost of each pie based on the cost of each ingredient

  // Calculate the total cost of all the pies

  // Print the total revenue calculated using the given profitMargin
  findProfit(totalCost, profitMargin, pieQuantity);
}

/******************************* LOCAL TESTS *******************************/
bakeAndSellPies("applePie", 5, 2.5);
bakeAndSellPies("pumpkinPie", 2);
bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies,
};
