import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipePageHero from 'components/RecipePageComponents/Hero/Hero';
import RecipePageInstruction from 'components/RecipePageComponents/Instruction/Instruction';
import SharedContainer from 'components/common/SharedContainer/SharedContainer';
import RecipePageIngredients from 'components/RecipePageComponents/Ingredients/Ingredients';
import getRecipeById from 'services/getRecipeById';
import { getAllShoppingList } from 'redux/ShopingList/operations';
import { useDispatch } from 'react-redux';

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllShoppingList())
    getRecipeById(recipeId)
      .then(data => {
        if (data) {
          setRecipe(data);
        } else {
          setRecipe('');
          navigate('/notFound');
        }
      })
      .catch(err => console.log(err.message));
  }, [recipeId, navigate, dispatch]);

  return (
    <>
      <RecipePageHero recipe={recipe} />
      <SharedContainer>
        <RecipePageIngredients ingredients={recipe.ingredients} />
        <RecipePageInstruction recipe={recipe} />
      </SharedContainer>
    </>
  );
}
