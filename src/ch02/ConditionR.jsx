import { useState } from 'react'
import '../styles.css'

function ConditionR() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="warpp">
      <button className="btn" onClick={()=> setIsLogin(!isLogin)}> {isLogin ? "로그아웃" : "로그인"}</button><br/>
      <hr />
      <h1 className="greeting">{isLogin ? "환영합니다~~" : "모두 함께 리액트 공부"}</h1>
    </div>
  )
}
export default ConditionR;