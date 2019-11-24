import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../publications.json';
const queryString = require('query-string');

export default class Reader extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search).item;

    if (parsed > publications.length && parsed) {
      history.replace({
        ...location,
        search: '?item=1',
      });
    }
  }

  handlePrevList = () => {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search).item;

    if (parsed > 1) {
      history.push({
        ...location,
        search: `?item=${Number(parsed) - 1}`,
      });
    }
  };

  handleNextList = () => {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search).item;

    if (parsed < publications.length) {
      history.push({
        ...location,
        search: `?item=${Number(parsed) + 1}`,
      });
    }
  };

  render() {
    const { location } = this.props;
    const parsed = queryString.parse(location.search).item;

    return (
      <div>
        <Controls
          currentPage={parsed}
          lengthPublications={publications.length}
          prevList={this.handlePrevList}
          nextList={this.handleNextList}
        />
        <Counter currentValue={parsed} totalValue={publications.length} />
        <Publication item={publications[parsed - 1]} />
      </div>
    );
  }
}
