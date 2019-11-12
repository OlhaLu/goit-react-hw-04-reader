import React from 'react';
import T from 'prop-types';

 const Controls = ({prevList, nextList, lengthPublications, currentPage }) =>  {
    return (
        <section>
          <button 
          type="button" 
          className="button"
          disabled={currentPage === 1} 
          onClick={prevList}>Назад</button>

          <button 
          type="button" 
          className="button" 
          disabled={currentPage === lengthPublications}
          onClick={nextList}>Вперед</button>
        </section>
    ) 
    }

    Controls.propTypes = {
      prevList: T.func.isRequired,
      nextList: T.func.isRequired,
    };


export default Controls;