import { forwardRef, useImperativeHandle, useRef } from "react";

// situation that we have to pass function of child component to parent component.
const Parent = () => {

    const ref = useRef(null);

    return (
        <>
        <button onClick={()=>ref.current.focus()}>Focus</button>
        <Child ref={ref}/>
        </>
    )
}

export default Parent;

const Child = forwardRef((props, ref) =>{

    const focusRef = useRef(null)

    function focus(){
        focusRef.current.focus()
    }

    useImperativeHandle(ref, ()=>{
        return {
            focus
        }
    })
    return (
        <input placeholder="enter the fucking number" ref={focusRef}/>
    )
})

