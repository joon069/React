import { React } from 'react';
function Hello( props) {
  return (
    <main>
      <h1>Hello {props.name} World!</h1>
      <h3>{ props.number}번째 방문 입니다.</h3>
    </main>
  );
}

export default Hello;