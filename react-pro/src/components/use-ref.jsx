import { useRef } from "react"

const UseRef = () => {
    const focusRef = useRef(null)
  return (
    <div>
        <input ref={focusRef} type="text" name="" id="" />
        <button onClick={()=>focusRef.current.focus()}>Focus</button>
    </div>
  )
}
export default UseRef