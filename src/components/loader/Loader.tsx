import { Spin } from 'antd';
import React from 'react';

function Loader(): JSX.Element {
  return (
    <div className="example">
      <Spin size="large" />
    </div>
  );
}

export default Loader;