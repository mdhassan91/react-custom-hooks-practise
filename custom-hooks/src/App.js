import {useState,useCallback,useMemo} from 'react';
import useFetch from "./useFetch";


function App() {
const[isTextChanged,setIsTextChanged] =useToggle();
const [number, setNumber] = useState(0)

const squaredNum=useMemo(()=>{
  return squareNum(number);
},[number ])


const [counter, setCounter] = useState(0);

const onChangeHandler = (e) => {
	setNumber(e.target.value);
}

const counterHander = () => {
	setCounter(counter + 1);
}

console.log(isTextChanged,setIsTextChanged  );


  return (
    <div className="App">

    <button onClick={setIsTextChanged}> {isTextChanged ? "Toggle":"Click to toggle"} </button>


    <input type="number" placeholder="Enter a number"
		value={number} onChange={onChangeHandler}>
	</input>
		
	<div>OUTPUT: {squaredNum}</div>
	<button onClick= {counterHander}>Counter ++</button>
	<div>Counter : {counter}</div>
    
    </div>
  );
}

export default App;

function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
  }


const useToggle=(initialState=true)=>{
const [state,setState] = useState(initialState);

const toggle= useCallback(()=>setState(state=>!state),[])

return [state,toggle]

}


const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export {Home} 