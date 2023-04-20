import { useEffect, useState } from "react";
// import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  
  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");


  return(
    <div>
      <button onClick={()=>setCount
      (count + 1)}>You Clicked Me {count} times</button>
      <input
       type="text" 
       placeholder="Type away..."
        value= {text}
       onChange={(e)=>setText(e.target.value)}
       />
       {/* <DogPics /> */}
    </div>
    
    
  )
  
}

export default App;
