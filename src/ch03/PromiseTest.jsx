export default function PromiseTest(){
  const increase = (num) => {
    const promise =
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = num + 10;
          if (result > 50) {
            const e = new Error('숫자가 너무 커요!');
            return reject(e);
          }
          resolve(result);
        }, 1000);
      });
    return promise;
    }
  console.log()
  increase(0)
    .then((number) => {
      //Promise에서 resolve된 값은 .then을 통해 받아옴
      console.log(number);
      return increase(number); //Promise를 리턴하면
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div>
      <h1>Promise 객체 Test</h1>
    </div>
  );
};
  //1. 10초마다 10씩 증가한 값이 4번 출력되도록 하시오.