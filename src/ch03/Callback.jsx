//CallbackTest.jsx
//10초 후에 초기값 0을 10으로 증가시키는 함수를 작성하시오.
export default function CallbackTest() {

  function increase (num, callback){
    setTimeout(() => {
      const result = num + 1
      callback(result);
    }, 1000);
	} 

console.log("콜백함수 테스트");
  increase(0, (result) => { // 1
    console.log(result);
    increase(result, (result) => { // 2
      console.log(result);
      increase(result, (result) => { // 3
        console.log(result);
        increase(result, (result) => { // 4
          console.log(result);
          increase(result, (result) => { // 5
            console.log(result);
            increase(result, (result) => { // 6
              console.log(result);
              increase(result, (result) => { // 7
                console.log(result);
                increase(result, (result) => { // 8
                  console.log(result);
                  increase(result, (result) => { // 9
                    console.log(result);
                    increase(result, (result) => { // 10
                      console.log(result);
                      console.log("작업완료");
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  return (
    <div>
      <h1>Callback함수 Test</h1>
    </div>
  );
};