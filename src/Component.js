import React from 'react';
import loadable from 'react-loadable';

const LoadableComponent = loadable({
  loader: () => import('./Async'),
  loading: () => <div>Loading heyyyy</div>,
});

export default () => <LoadableComponent />;
