import {
  ShoppingListHeader,
  ShoppingListItem,
  OptionNameContainer,
  ShoppingList,
  ShoppingListTitle,
  Container
} from './ShoppingListPage.styled';
import ProductListItem from 'components/ShoppingListPage/ShoppingListItem/ShoppingListItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SharedContainer from 'components/common/SharedContainer/SharedContainer';
import { deleteIngredient, getAllShoppingList } from 'redux/ShopingList/operations';
import { getShoppingList } from 'redux/ShopingList/selectors';
import SearchFailed from 'components/common/EmptyPage/EmptyPage';
import PageLoader from 'components/common/PageLoader/PageLoader';

export default function ShoppingListPage() {

  const [isLoading, setIsLoading] = useState(false)

  const [products, setProducts] = useState([])

  const dispatch = useDispatch();

  const ingredients = useSelector(getShoppingList);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllShoppingList());
      setProducts(ingredients)
    }
    if (products.length === ingredients.length) {
      return
    }
    setIsLoading(true);
    dispatch(getAllShoppingList());
    setProducts(ingredients);
    setIsLoading(false)
  }, [dispatch, ingredients, products]);

  const onDeleteClick = (id) => {
    dispatch(deleteIngredient(id));
  };

  return (
    <SharedContainer isBg>
      <div>
        <ShoppingListTitle>Shopping list</ShoppingListTitle>
        {ingredients.length > 0 &&
                <ShoppingListHeader>
                <p>Products</p>
                <OptionNameContainer>
                  <span>Number</span>
                  <span>Remove</span>
                </OptionNameContainer>
              </ShoppingListHeader>
        }
        <ShoppingList>
          {isLoading ? <PageLoader/> : 
                    ingredients.length > 0 ?
                    ingredients.map(product => {
                      const { id: { name, img }, measure, newId } = product;
                        return (
                          <ShoppingListItem key={newId}>
                            <ProductListItem
                              name={name}
                              number={measure}
                              id={newId}
                              url={img}
                              onDeleteClick={onDeleteClick}
                            >
                            </ProductListItem>
                          </ShoppingListItem>
                        );
                      }): <Container><SearchFailed description="You haven't added any product yet"/></Container>} 
        </ShoppingList>
      </div>
    </SharedContainer>
  );
}
