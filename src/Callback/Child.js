import React from 'react';

const Child = () => {
  console.log('[child] render');
  return <h3>Child Component</h3>;
};

export default React.memo(Child);