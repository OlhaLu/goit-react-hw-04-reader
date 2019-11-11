import React from 'react';
import T from 'prop-types';
import style from '../../styles.css';

const Publications = ({ items }) => {
    return (
      <article сlassName={style.publication} id={items.id}>
      <h2 сlassName={style.title}>{items.title}</h2>
      <p сlassName={style.text}>{items.text}</p>
      </article>
    );
}

  Publications.propTypes = {
  items: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  })
};
  
export default Publications;