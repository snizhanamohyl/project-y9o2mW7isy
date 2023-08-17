import MainTitle from 'components/common/MainTitle/MainTitle.jsx';
import AddRecipeForm from 'components/AddRecipePage/AddRecipeForm/AddRecipeForm.jsx';
import FollowUs from 'components/common/FollowUs/FollowUs.jsx';
import PopularRecipe from 'components/AddRecipePage/PopularRecipe/PopularRecipe.jsx';
import { Wrapper, Grid } from './AddRecipePage.styled.js';
import SharedContainer from 'components/common/SharedContainer/SharedContainer.jsx';
import useWindowWidth from 'hooks/useWindowWidth.js';

export default function AddRecipePage() {
  const width = useWindowWidth();

  return (
    <SharedContainer isBg>
      <Wrapper>
        <MainTitle>Add recipe</MainTitle>
        <Grid>
          <AddRecipeForm />
          <div>
            {width >= 1440 && <FollowUs />}
            <PopularRecipe />
          </div>
        </Grid>
      </Wrapper>
    </SharedContainer>
  );
}
