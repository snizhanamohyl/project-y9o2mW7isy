import { useState } from 'react';
import SharedContainer from 'components/common/SharedContainer/SharedContainer';
import SearchBar from 'components/SearchPage/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchPage/SearchedRecipesList/SearchedRecipesList';
import { Section, MainPageTitle } from './SearchPage.styled';

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SharedContainer isBg>
      <Section>
        <MainPageTitle>Search</MainPageTitle>
        <SearchBar isLoading={isLoading} />
        <SearchedRecipesList
          isLoading={isLoading}
          changeLoadingState={setIsLoading}
        />
      </Section>
    </SharedContainer>
  );
}
