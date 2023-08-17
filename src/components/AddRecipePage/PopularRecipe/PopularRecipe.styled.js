import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section``;

export const List = styled.ul`
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
    column-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  padding-bottom: 13px;
  border-bottom: 1px solid var(--line-color);
  transition: border-color var(--transition-time) var(--transition-function);
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--input-border-color-focus);
  }

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  column-gap: 12px;

  cursor: pointer;
`;

export const Image = styled.img`
  min-width: 102px;
  width: 102px;
  height: 85px;
  object-fit: cover;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h3`
  margin-bottom: 3px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: var(--text-primary);
`;

export const Description = styled.p`
  color: var(--color-text-secondary);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;

  overflow: hidden;
`;

export const FailureMessage = styled.p`
  margin-top: 10px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-primary);
`;
