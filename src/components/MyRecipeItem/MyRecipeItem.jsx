import {
    ContainerCard,
    ImgCard,
    TitleCard,
    TextCard,
    ContainerContent,
    ContainerBtnRecipe,
    TimeCard,
    Container,
    ContainerHeaderRecipe,
        } from '../MyRecipeItem/MyRecipesItem.styled';
import ButtonDelRicepe from '../ButtonDelRecipe/ButtonDel';
import ButtonRecipeSee from '../ButtonRecipeSee/ButtonRecipeSee';

const MyRecipeItem = ({recipe, isFavorites, onDeleteClick}) => {
    const {preview, title, _id, description, time} = recipe;

    console.log(isFavorites)

    const onClick = () => {
            if(isFavorites){
                onDeleteClick(_id)
            }
    }

    return(
                <ContainerCard> 
                    <ImgCard src={preview} alt={title} />
                    <Container>
                        <ContainerContent>
                            <ContainerHeaderRecipe>
                                <TitleCard>{title}</TitleCard>
                                    <ButtonDelRicepe isFavorites={isFavorites} onClick={onClick}/>
                            </ContainerHeaderRecipe>
                            <TextCard>{description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{time} min</TimeCard>
                                <ButtonRecipeSee isFavorites={isFavorites} path={`/recipe/${_id}`}/>
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
    )
}

export default MyRecipeItem
