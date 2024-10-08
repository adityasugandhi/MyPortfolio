import React from 'react';

// Define your template component
const MyTemplate = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const ShortDescription = entry.getIn(['data', 'ShortDescription']);
  const body = widgetFor('body');

  return (
    <article>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{ShortDescription}</p>
      <div>{body}</div>
    </article>
  );
};

export default MyTemplate;
