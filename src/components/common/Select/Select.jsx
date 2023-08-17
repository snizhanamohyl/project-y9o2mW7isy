import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ScrollBar from 'components/common/ScrollBar/ScrollBar';
import {
  Wrapper,
  Button,
  ButtonText,
  ListWrapper,
  List,
  Option,
} from './Select.styled';
import Sprite from 'assets/sprite.svg';
import 'simplebar-react/dist/simplebar.min.css';

export default function Select({ options, currentOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleNextClick = () => {
      setIsOpen(false);
      document.removeEventListener('click', handleNextClick);
    };

    setTimeout(() => {
      document.addEventListener('click', handleNextClick);
    }, 0);
  }, [isOpen]);

  const handleSelect = value => {
    onSelect(value);
  };

  const getOptionLabel = val => {
    const targetOption = options.find(({ value }) => value === val);
    return targetOption.label;
  };

  return (
    <Wrapper>
      <Button type="button" onClick={() => setIsOpen(state => !state)}>
        <ButtonText>
          {currentOption ? getOptionLabel(currentOption) : 'Select...'}
        </ButtonText>
        <svg width={20} height={20}>
          <use href={Sprite + '#icon-down'}></use>
        </svg>
      </Button>

      <ListWrapper $isOpen={isOpen}>
        <ScrollBar>
          <List>
            {options.map(({ label, value }) => (
              <Option
                key={value}
                $active={currentOption === value}
                onClick={() => handleSelect(value)}
              >
                {label}
              </Option>
            ))}
          </List>
        </ScrollBar>
      </ListWrapper>
    </Wrapper>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  currentOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  currentOption: '',
  onSelect: () => null,
};
