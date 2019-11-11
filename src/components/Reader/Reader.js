import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import style from '../../styles.css';

export default class Reader extends Component {
  state = {
    renderedPage: 1,
  };

  handlePrevList = () => {
     if (this.state.renderedPage > 1) {
      this.setState(prevState => ({ renderedPage: prevState.renderedPage - 1 }));
     }
  };
  
  handleNextList = () => {
    if (this.state.renderedPage < this.props.items.length) {
      this.setState(prevState => ({ renderedPage: prevState.renderedPage + 1 }));
    }
  }

        render() {
          const { renderedPage } = this.state;
          const { items } = this.props;     
          
        return (
          <div сlassName={style.render}>
        <Controls
          prevList={this.handlePrevList}
          nextList={this.handleNextList}
        />
        <Counter 
         currentValue={renderedPage} 
         totalValue={items.length} 
        />
        <Publication 
        items={items[renderedPage - 1]}
        />
        </div>
    )}  
}