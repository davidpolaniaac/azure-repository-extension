import React from 'react';

function CheckRoute({
  component: Component, pathname, ...props
}) {
  return <Component {...props} />;
}

export default CheckRoute;
