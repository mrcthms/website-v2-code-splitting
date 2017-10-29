import React from 'react';
import loadable from 'react-loadable';

const LoadableComponent = loadable({
  loader: () => import('./Async'),
  loading: () => <div>Loading Async</div>,
});

const AsyncComponent = loadable({
  loader: () => import('./Async2'),
  loading: () => <div>Loading Async2</div>,
});

class Component extends React.Component {
  state = {
    show: false,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const join = await import(/* webpackChunkName: "lodash/join"*/ 'lodash/join');
    /* eslint-disable react/no-did-mount-set-state */
    this.setState(() => ({
      joined: join(['This', 'is', 'being', 'joined', 'via', 'async', 'import'], ' 🏨 '),
    }));
    /* eslint-enable */
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
        <h3>{this.state.joined}</h3>
      </div>
    );
  }
}

export default Component;
