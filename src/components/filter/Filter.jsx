import { useSelector, useDispatch } from 'react-redux';
import { updFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { Div, Input, Label } from 'components/filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getFilter);

  const changeFilter = event => {
    dispatch(updFilter(event.currentTarget.value));
  };

  return (
    <Div>
      <Label htmlFor="text">Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={changeFilter} />
    </Div>
  );
};
