import React from 'react';
import loadable from 'react-loadable';

const LoadableComponent = loadable({
  loader: () => import('./Async'),
  loading: () => <div>Loading heyyyy</div>,
});

const AsyncComponent = loadable({
  loader: () => import('./Async2'),
  loading: () => <div>Loading sdfsdfsdf</div>,
});

class Component extends React.Component {
  state = {
    show: false,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.setState(() => ({
      show: true,
    }));
  };

  handleMouseOver = () => {
    AsyncComponent.preload();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Will I preload?</button>
        <LoadableComponent />
        {this.state.show && <AsyncComponent />}
      </div>
    );
  }
}

export default Component;
