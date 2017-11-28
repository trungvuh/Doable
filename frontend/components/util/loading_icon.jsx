import React from 'react';
import { RingLoader } from 'react-spinners';

class LoadingIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { loading } = this.props;
    return (
      <div className="loading-icon">
        <RingLoader
          size={100}
          color={"#36d7b7"}
        />
        </div>
    );
  }
}

export default LoadingIcon;
