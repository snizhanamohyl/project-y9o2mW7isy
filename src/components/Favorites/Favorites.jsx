import React from 'react';
import MyRecipesList from '../MyRecipesItem/MyRecipesList';
import Pagination from '../../components/Pagination/Pagination';
import {  useState } from 'react';
import { FavoritePageTitle, Container } from './Favorites.styled.js';
import EmptyPage from '../EmptyPage/EmptyPage';
import { useSelector } from 'react-redux';
import { getAllFavorites } from '../../redux/Favorite/selectors';
// import { getAllFavoritList } from '../../redux/Favorite/operations'


const Favorites = () => {
    // const [recipes, setRecipes] = useState([]);
    const recipes = [];
    const [currentPage, setCurrentPage] = useState(1);

    // const dispatch = useDispatch();
    const recipesAll = useSelector(getAllFavorites)
    console.log(recipesAll)
    
    const recipesPerPage = 4;


    // useEffect(() => {
    //     dispatch(getAllFavoritList())
    //     setRecipes(recipesAll)
    // }, [dispatch]);


    // індекс останнього рецепту на поточній сторінці
    const lastRecipeIndex = currentPage * recipesPerPage;
    //індекс першого рецепту на поточній сторінці
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
    //масив рецептів для поточної сторінки
    const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

    return(
        <>  
            <FavoritePageTitle>Favorite </FavoritePageTitle>
            {recipes.length > 0 ? (
                <>            
                    <MyRecipesList isFavorites={true} recipe={currentRecipes}/>
                </>
            ):(
                <Container>
                    <EmptyPage description={"you haven't added any favorite recipes yet"}/>
                </Container>
            )}

            {recipes.length > 0 ? (
                <Pagination 
                    recipesPerPage={recipesPerPage} 
                    totalRecipe={recipes.length} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                /> 
            ):(null)}
        </>
    )
}

export default Favorites;