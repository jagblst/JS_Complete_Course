import * as model from './model.js'; 
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try{
    const id = window.location.hash.slice(1);
    console.log(id);
    if(!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
   
    recipeView.render(model.state.recipe);
  } catch(err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);