import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingIcon = ({ loading }) => (
  <div className="loading-icon">
    <ScaleLoader
      loading={loading}
      height="35"
      width="4"
      margin="2px"
      radius="2"
      color="#36d7b7" />
  </div>
);

export default LoadingIcon;
