import { useState } from 'react';

const cars = ['소나타', '그랜저', '아반떼'];
let foo = ['one', 'two', 'three'];

function Car(props) {
  return <li>{props.name}</li>
}

function MapTest1() {
  return (
    <>
      <h1>foo 배열 출력</h1>
      <ul>
        {foo.map((item) => (<li>{item}</li>))}
      </ul>
      <h1>차고에 있는 차 목록</h1>
      <ul>
        {cars.map((item) => (<li>{item}</li>))}
      </ul>
      <h1>FOO가 그래서 뭔데</h1>
      <ul>
        <Car name={foo[0]} />
        <Car name={foo[1]}/>
        <Car name={foo[2]}/>
      </ul>
    </>
  )
}
export default MapTest1;