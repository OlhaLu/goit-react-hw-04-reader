import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../publications.json';
const queryString = require('query-string');

export default class Reader extends Component {
  state = {
    renderedPage: 1,
  };

componentDidMount() {
  const { location, history } = this.props;
  const { renderedPage } = this.state;
  const parsed = queryString.parse(location.search);

  if (renderedPage > publications.length) {
    history.replace({
      ...location,
      search: '?item=1',
    });
  } else {
    this.setState({ renderedPage: Number(parsed.item) });
  }
}


  handlePrevList = () => {
    const { history, } = this.props;
    const { renderedPage } = this.state;

    history.push({
      pathname: '/reader',
      search: `?item=${renderedPage - 1}`,
    });
    this.setState(prevState => ({ renderedPage: prevState.renderedPage - 1 }));
  };

  handleNextList = () => {
    const { history } = this.props;
    const { renderedPage } = this.state;

    history.push({
      pathname: '/reader',
      search: `?item=${renderedPage + 1}`,
    });
    this.setState(prevState => ({ renderedPage: prevState.renderedPage + 1 }));
  };

  render() {
    const { renderedPage } = this.state;

    return (
      <div>
        <Controls
          currentPage={renderedPage}
          lengthPublications={publications.length}
          prevList={this.handlePrevList}
          nextList={this.handleNextList}
        />
        <Counter currentValue={renderedPage} totalValue={publications.length} />
        <Publication item={publications[renderedPage - 1]} />
      </div>
    );
  }
}
