import missing404Image1 from "images/codes/missing404_1.jpg";
import missing404Image2 from "images/codes/missing404_2.jpg";

import chipDipImage1 from "images/recipes/chipdip_1.jpg";
import chipDipImage2 from "images/recipes/chipdip_2.jpg";

import CabbageBeefStewImage1 from "images/recipes/coc_cabbage_beef_stew_1.jpg";
import CabbageBeefStewImage2 from "images/recipes/coc_cabbage_beef_stew_2.jpg";

import BroccoliChickenCheeseImage1 from "images/recipes/breaded_broccoli_chicken_cheese_1.jpg";
import BroccoliChickenCheeseImage2 from "images/recipes/breaded_broccoli_chicken_cheese_2.jpg";

export const IRecipes = {
  Unknown: 'Unknown',
  BestChipDip: 'BestChipDip',
  CabbageBeefStew: 'CabbageBeefStew',
  BroccoliChickenCheese: 'BroccoliChickenCheese',
  WorldsBestBeefStew: 'WorldsBestBeefStew',
  FrenchBread: 'FrenchBread'
};

const recipeList = {
  BestChipDip: {
    featured: true,
    type: IRecipes.BestChipDip,
    url: "/recipe/best-chip-dip",
    title: "Famous Earnest Chip Dip",
    description: "Perfect for Thanksgiving, Christmas, and Summer BBQ's! My family almost always makes this dip for every family get-together, and is best combined with Lays/Ruffels chips along with a variety of vegetables.\nThis is a very easy dish to make, and is especially good at getting people to eat more raw veggies!",
    tags: ["appetizer", "dip"],
    author: "Edison Earnest",
    date: "12/24/2023",
    source: "N/A",
    overviewInfo: [
      { type: "prepTime", text: "Prep Time:", value: "10", units: "Minutes"},
      { type: "cookTime", text: "Cook Time:", value: "N/A", units: "Minutes"},
      { type: "pressureCookTime", text: "Pressure Cook Time:", value: "N/A", units: "Minutes"},
      { type: "servings", text: "Servings:", value: "16"},
    ],
    ingredients: [
      "2 8 oz Blocks of Cream Cheese",
      "1 Packet (1 oz/8 Tsp) Hidden Valley Ranch Seasoning Powder Mix",
      "1/2 cups of Milk (as needed for desired consistency)"
    ],
    instructions: [
      "Thaw Cream Cheese so it's easier to mix.",
      "Add Cream Cheese to mixing bowl with a small amount of milk. Start mixing with an electric hand mixer or stad mixer. Keep adding milk until desired consistency. Dip should be thick and not runny.",
      "Add ranch dressing packet, mix until the dip is consistent.",
    ],
    nutrition: [{
      servingSize: "0 grams",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    {
      servingSize: "all servings",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    }]
  },
  CabbageBeefStew: {
    type: IRecipes.CabbageBeefStew,
    url: "/recipe/cabbage-beef-stew",
    title: "Cream Of Chicken Cabbage Beef Stew",
    description: "A quick and easy stew to make that's a little different than your typical stew, as it uses ground beef instead of steak. It's quick, easy and is an Earnest family favorite!",
    tags: ["stew"],
    author: "Edison Earnest",
    date: "12/25/2023",
    source: "N/A",
    overviewInfo: [
      { type: "prepTime", text: "Prep Time:", value: "20", units: "Minutes"},
      { type: "cookTime", text: "Cook Time:", value: "40", units: "Minutes"},
      { type: "pressureCookTime", text: "Pressure Cook Time:", value: "30", units: "Minutes"},
      { type: "servings", text: "Servings:", value: "1"},
    ],
    ingredients: [
      "1 1/2 lbs ground beef",
      "2 large potatoes",
      "1/2 medium head of cabbage, chopped",
      "1 lb bag of baby carrots",
      "1 medium onion, diced",
      "2 cans (10 1/2 ounces) of cream of chicken soup",
      "(optional) shredded cheese to add as a topping",
    ],
    instructions: [
      "Place 1 pound of the ground beef onto a large skillet, reserving the remaining 1/2 pounds.",
      "Layer carrots first, then onions and cabbage onto the ground beef in seperate layers.",
      "Finally, add the remainder of the ground beef and the 2 cans of cream of chicken soup.",
      "Cover and cook over medium heat for about 10 minutes. Reduce heat to low and cook for another 30 minutes.",
      "Top with cheese and enjoy!.",
    ],
    nutrition: [{
      servingSize: "0 grams",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    }]
  },
  BroccoliChickenCheese: {
    type: IRecipes.BroccoliChickenCheese,
    url: "/recipe/breaded-broccoli-chicken-cheese",
    title: "Broccoli Chicken Cheese Bread Ring",
    description: "A great recipie that everyone in the family can enjoy! Though this recipie might take a bit longer to make due to needing to also make the French Bread, it can be substituted out with store-bought Crescent rolls to save time.",
    tags: ["bread"],
    author: "Edison Earnest",
    date: "12/25/2023",
    source: "N/A",
    overviewInfo: [
      { type: "prepTime", text: "Prep Time:", value: "80", units: "Minutes"},
      { type: "cookTime", text: "Cook Time:", value: "30", units: "Minutes"},
      { type: "pressureCookTime", text: "Pressure Cook Time:", value: "N/A", units: "Minutes"},
      { type: "servings", text: "Servings:", value: "12"},
    ],
    ingredients: [
      "1 full dough recipe or 4 Pillsbury Crescent Rolls package",
      "3 cups of Broccoli",
      "4 cups of cooked Chicken (4-5 breasts)",
      "16 oz of shredded sharp cheddar cheese",
      "2 10 oz cans of Cream of Chicken",
      "3 cloves of garlic minced",
      "1/2 teaspoons of salt",
    ],
    instructions: [
      "Start on making the bread by either following the recipe for french bread, or by substituting with 4 Pillsbury Crescent Roll packages. If using the french bread recipie, follow recipie until after step 5.",
      "While waiting for the dough to rise from the french bread recipe, start working on the filling. Steam broccoli until bright green but still crunchy.",
      "In a large bowl, transfer the broccoli to cool, and combine with chicken breast, garlic, cheese, cream of chicken, and salt. Mix together gently.",
      "Going back to the bread after letting it rise, instead of making 2 loafs and baking, split dough into 2 round mounds and pinch a hole in the middle, and start stretching dough into a big doughnut shape where the width is around 5 inches wide.",
      "Start spooning the filling onto the inner center of the bread, keeping about 1 inch away from the outer edges.",
      "Using your fingers, pull outer parts of the doughnut and wrap it over the filling, carefully stretching the outer dough to the inner ring.",
      "Pinch the 2 edges together to reform the bread seams back together.",
      "Cover the rings and let it sit and rise for another 30 minutes.",
      "Preheat oven to 400 F. Bake on center rack for 25-30 minutes.",
      "While still warm, rub/brush butter on the top to soften the bread.",
    ],
    nutrition: [{
      servingSize: "0 grams",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    }]
  },
    WorldsBestBeefStew: {
    hidden: true,
    type: IRecipes.WorldsBestBeefStew,
    url: "/recipe/worlds-best-beef-stew",
    title: "Worlds Best Beef Stew",
    description: "todo: CabbageBeefStew description",
    tags: ["stew"],
    author: "Edison Earnest",
    date: "12/25/2023",
    source: "N/A",
    overviewInfo: [
      { type: "prepTime", text: "Prep Time:", value: "0", units: "Minutes"},
      { type: "cookTime", text: "Cook Time:", value: "N/A", units: "Minutes"},
      { type: "pressureCookTime", text: "Pressure Cook Time:", value: "N/A", units: "Minutes"},
      { type: "servings", text: "Servings:", value: "1"},
    ],
    ingredients: [
      "todo: ingrediants list"
    ],
    instructions: [
      "todo: cooking instructions"
    ],
    nutrition: [{
      servingSize: "0 grams",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    }]
  },
  FrenchBread: {
  type: IRecipes.FrenchBread,
  url: "/recipe/french-bread",
  title: "French Bread",
  description: "A french bread recipie that my mother used primarily when growing up. The recipie is fairly simple, and goes great with pretty much anything, and is often used in other recipies!",
  tags: ["bread"],
  author: "Edison Earnest",
  date: "12/28/2023",
  source: "N/A",
  overviewInfo: [
    { type: "prepTime", text: "Prep Time:", value: "60", units: "Minutes"},
    { type: "cookTime", text: "Cook Time:", value: "30", units: "Minutes"},
    { type: "pressureCookTime", text: "Pressure Cook Time:", value: "N/A", units: "Minutes"},
    { type: "servings", text: "Servings:", value: "1"},
  ],
  ingredients: [
    "2 pkg. of dry bread yeast",
    "1/4 cups warm water",
    "2 cups hot water",
    "3 tablespoons sugar",
    "1 tablespoons salt",
    "5 tablespoons oil",
    "6 cups flour",
  ],
  instructions: [
    "Dissolve yeast in warm water for 10 minutes.",
    "Combine hot water, sugar, salt, oil, and 1/2 the flour.",
    "Combine previous step with the yeast water, and the remainder of the flour. Mix until consistent.",
    "Leave spoon in mixer paddle in batter, rest for 10 minutes, and the restir mixture. Repeat 3 times.",
    "Put on floured board and knead once or twice to coat with flour.",
    "Divide in half into 2+ mounds. Carefully stretch the dough into a loaf shape and place onto a baking sheet that has been lined with parchment paper.",
    "Wait 30 more minutes to let the dough rise more, preferrably in a warmer environment.",
    "Preheat oven to 400 F, place baking sheet with dough onto the center wrack and bake for 25-30 minutes (or until golden-brown).",
    "While still warm after baking, rub/brush butter on the top to soften the bread.",
  ],
  nutrition: [{
    servingSize: "0 grams",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  }]
}
}

const UnknownRecipe = {
  type: IRecipes.Unknown,
  title: "404 - Unknown Recipie :(",
  url: "/recipe/error",
  tags: ["404"],
  overviewInfo: [],
  ingredients: [],
  nutrition: [],
  instructions: []
}

function getRecipeList() {
  return recipeList;
}

export function getAllRecipes() {
  const allRecipes = getRecipeList();
  let recipesResult = [];

  Object.keys(allRecipes).forEach(recipeKey => {
    if (!allRecipes[recipeKey]?.hidden) {
      const recipeItem = JSON.parse(JSON.stringify(allRecipes[recipeKey]));
      recipeItem["imageSrc"] = searchForRecipeImage(recipeItem);
      recipesResult.push(recipeItem);
    }
  });

  return recipesResult;
}

export function searchForRecipe(recipe) {
  const recipesResult = getRecipeList();
  return !!recipesResult[recipe] ? recipesResult[recipe] : UnknownRecipe;
}

export function getRecipeFromUrl(url) {
  const recipesResult = getRecipeList();
  let recipe = UnknownRecipe;
  Object.keys(recipesResult).forEach(key => {
    if (!!recipesResult[key]?.url  && recipesResult[key].url === url) {
      recipe = recipesResult[key];
    }
  });
  return recipe;
}

export function searchForRecipeImage(recipe) {
  if (!recipe?.type) {
    return missing404Image1;
  }

  let resultImage;

  switch (recipe.type) {
    case IRecipes.Unknown:
      resultImage = getRandomItemFromList([missing404Image1, missing404Image2]);
      break;
    case IRecipes.BestChipDip:
      resultImage = getRandomItemFromList([chipDipImage1, chipDipImage2]);
      break;
    case IRecipes.CabbageBeefStew:
      resultImage = getRandomItemFromList([CabbageBeefStewImage1, CabbageBeefStewImage2]);
      break;
    case IRecipes.BroccoliChickenCheese:
      resultImage = getRandomItemFromList([BroccoliChickenCheeseImage1, BroccoliChickenCheeseImage2]);
      break;
    default:
      resultImage = missing404Image1
  }

  return resultImage;
}

const getRandomItemFromList = (imageList) => {
  return imageList[Math.floor(Math.random()*imageList.length)];
}
