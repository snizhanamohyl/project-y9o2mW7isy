import React from 'react';
import MyRecipes from 'components/CollectionPages/MyRecipes/MyRecipes';
import SharedContainer from 'components/common/SharedContainer/SharedContainer';


const MyRecipesPage = () => {
  return (
            <SharedContainer isBg>
                <MyRecipes />
            </SharedContainer>
  );
};

export default MyRecipesPage;



