import { useEffect, useState } from "react"

export const useWindowSize = () =>{
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    function handleResize(){
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize)

        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size;

}

