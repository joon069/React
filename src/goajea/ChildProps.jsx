import { React } from 'react';

function Card({ title, children }) {
  return (
    <section className="card">
      <h1>{title}</h1>
      <div className="card-content">{children}</div>
    </section>
  );
}
export default Card;