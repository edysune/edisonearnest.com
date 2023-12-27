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
  WorldsBestBeefStew: 'WorldsBestBeefStew'
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
      { type: "servings", text: "Servings:", value: "1"},
    ],
    ingredients: [
      "4 Blocks of Cream Cheese",
      "1 Packet (8 Tsp) Hidden Valley Ranch Dip Seasoning Powder Mix",
      "~1/4 - 1/2 cups of Milk (as needed for desired consistency)"
    ],
    instructions: [
      "Thaw Cream Cheese so it's easier to mix.",
      "Add Cream Cheese to mixing bowl with a small amount of milk. Keep adding milk until desired consistency. Dip should be thick and not runny.",
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
  BroccoliChickenCheese: {
    type: IRecipes.BroccoliChickenCheese,
    url: "/recipe/breaded-broccoli-chicken-cheese",
    title: "Breaded Broccoli, Chicken and Cheese",
    description: "todo: BroccoliChickenCheese description",
    tags: ["bread"],
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
    WorldsBestBeefStew: {
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
    const recipeItem = JSON.parse(JSON.stringify(allRecipes[recipeKey]));
    recipeItem["imageSrc"] = searchForRecipeImage(recipeItem);
    recipesResult.push(recipeItem);
  });

  return recipesResult;
}

export function searchForRecipe(recipe) {
  const recipesResult = getRecipeList();
  return !!recipesResult[recipe] ? recipesResult[recipe] : UnknownRecipe;
}

export function getRecipeFromUrl(url) {
  const recipesResult = getRecipeList();
  console.log(recipesResult)
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
