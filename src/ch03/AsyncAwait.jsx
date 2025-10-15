// AsyncAwait.jsx
import { useEffect, useState } from 'react';

export default function PromiseTest() {
  const [error, setError] = useState(null); // 에러 메시지 저장용 상태
  const increase = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error('50보다 큰 수입니다.');
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
  };
  const run = async () => {
    try {
      let result = 0;
      for (let i = 0; i < 6; i++) {
        result = await increase(result);
        console.log(result);
      }
    } catch (e) {
      console.log(e);
      setError(e.message); // 에러 발생 시 메시지 상태에 저장
    }
  };
  useEffect(() => {
    run();
  }, []);
  return (
    <div>
      <h1>Promise 객체 Test (async/await)</h1>
      {/* 에러 메시지가 있을 경우 화면에 표시 */}
      {error && <p style={{ color: 'red' }}>에러 발생: {error}</p>}
    </div>
  );
}