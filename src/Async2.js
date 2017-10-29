import React from 'react';

class Async2 extends React.Component {
  state = {
    joined: null,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const join = await import(/* webpackChunkName: "lodash/join"*/ 'lodash/join');
    /* eslint-disable react/no-did-mount-set-state */
    this.setState(() => ({
      joined: join(['This', 'is', 'also', 'lazy', 'loaded'], ' 💅 '),
    }));
    /* eslint-enable */
  }

  render() {
    return <section>{this.state.joined || 'Waiting to Join'}</section>;
  }
}

export default Async2;
