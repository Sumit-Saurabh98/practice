import { useMemo, useState } from "react"

const UseMemo = () => {
    const [count, setCount] = useState(0)

    const countValue = useMemo(()=>{
        // heavy calculation
        let temp = 0;
        for(let i =0; i<1000000000; i++){
            temp += i
        }

        console.log(temp)

        console.log("function ran")

        return count;
    }, [count])
  return (
    <div>
        <h1>UseMemo</h1>
        <h3>Count: {countValue}</h3>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
    </div>
  )
}
export default UseMemo