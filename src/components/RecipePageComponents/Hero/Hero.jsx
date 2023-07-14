import {
  BtnAddFavorite,
  MainTitle,
  ContainerTimePrepare,
  RecipeDescription,
  SectionHero,
} from './Hero.styled';
import sprite from '../../../assets/sprite.svg';
import SharedContainer from 'components/SharedContainer/SharedContainer';
import { useState } from 'react';

export default function RecipePageHero({ recipe }) {
  const [addedToFavorite, setAddedToFavorite] = useState('');
  const { title, description, time } = recipe;

  const onClick = e => {};
  return (
    <SectionHero>
      <SharedContainer>
        <MainTitle>{title}</MainTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <BtnAddFavorite type="button">Add to favorite recipes</BtnAddFavorite>
        <ContainerTimePrepare>
          <svg width={14} height={14}>
            <use href={`${sprite}#icon-clock`}></use>
          </svg>
          <span>{time} min</span>
        </ContainerTimePrepare>
      </SharedContainer>
    </SectionHero>
  );
}
