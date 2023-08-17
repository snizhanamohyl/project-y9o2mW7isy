import SharedContainer from 'components/common/SharedContainer/SharedContainer';
import { Title } from './CategoriesPage.style';
import Categories from 'components/CategoriesPage/Categories/Categories';

export default function CategoriesPage() {
  return (
    <SharedContainer isBg>
      <Title>Categories</Title>
      <Categories />
    </SharedContainer>
  );
}
