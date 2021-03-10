import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import {
  TestState,
  increment,
  decrement
} from '@/modules/test';

type UseHooksProps = TestState &
  {
    increment: () => void,
    decrement: () => void
  };
const useHooksProps = (): UseHooksProps => {
  // state
  const state = useSelector((state: RootState) => state.test);
  // dispatch
  const dispatch = useDispatch();

  return {
    ...state,
    increment: React.useCallback(() => {
      dispatch(increment());
    }, [dispatch]),
    decrement: React.useCallback(() => {
      dispatch(decrement());
    }, [dispatch])
  };
};

type Props = ReturnType<typeof useHooksProps>;
// presentational Component
export const Top: React.FC<Props> = (props: Props) => {
  const { count, increment, decrement } = props;
  return (
    <div>
      <div onClick={increment}>
        [increment]
      </div>
      <div onClick={decrement}>
        [decrement]
      </div>
      this is top component. count is {count}
    </div>
  )
}

// container Component
export default function TopContainer(): JSX.Element {
  const _props = { ...useHooksProps() };
  return <Top {..._props}/>;
}