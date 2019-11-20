import React from 'react';
import T from 'prop-types';
import style from '../../styles.css';

const Publication = ({ item }) => {
  return (
    <article сlassName={style.publication} id={item.id}>
      <h2 сlassName={style.title}>{item.title}</h2>
      <p сlassName={style.text}>{item.text}</p>
    </article>
  );
};

Publication.propTypes = {
  items: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  }),
};

export default Publication;
