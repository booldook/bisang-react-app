import ErrorCp from 'components/common/ErrorCp';
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const withError = (ChildComponent) => {
  const Component = (props) => {
    const { err } = useSelector(state => state.post, shallowEqual); 
    return (
      <div>
        { err ? <ErrorCp /> : <ChildComponent /> }
      </div>
    )
  }
  return Component;
}

export default withError;