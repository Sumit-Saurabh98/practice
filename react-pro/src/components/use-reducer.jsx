import { useReducer } from "react";

const UserReducer = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "MANUAL":
        return { ...state, count: state.count + action.payload };  
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter</h1>
      <h3>Count: {state.count}</h3>
      <input placeholder="Inter the number" onChange={(e)=>dispatch({type:"MANUAL", payload:+(e.target.value)})}/>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment (+)</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement (-)</button>
    </div>
  );
};
export default UserReducer;
