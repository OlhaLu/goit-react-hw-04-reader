import React from 'react';
import T from 'prop-types';

 const Controls = ({prevList, nextList}) =>  {
    return (
        <section>
          <button 
          type="button" 
          className="button" 
          onClick={prevList}>Назад</button>

          <button 
          type="button" 
          className="button" 
          onClick={nextList}>Вперед</button>
        </section>
    ) 
    }

    Controls.propTypes = {
      prevList: T.func.isRequired,
      nextList: T.func.isRequired,
    };


export default Controls;