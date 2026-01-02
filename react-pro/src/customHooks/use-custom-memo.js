/* eslint-disable */
import { useRef } from "react"

const useCustomMemo = (cb, deps) => {

    // function to check are equal
    function areEqual(preDeps, newDeps){
        if(preDeps.length !== newDeps.length) return false

        for(let i=0; i<preDeps.length; i++){
            if(preDeps[i] !== newDeps[i]){
                return false
            }
        }

        return true
    }

    // use ref to store the memoized value and deps
    const memoisedRef = useRef();

    // check if deps changed and update value
    if (!memoisedRef.current || !areEqual(memoisedRef.current.deps, deps)) {
        memoisedRef.current = {
            value: cb(),
            deps: [...deps] // copy deps to avoid reference issues
        };
    }

    return memoisedRef.current.value;
}
export default useCustomMemo
