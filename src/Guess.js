import { render } from '@testing-library/react';
import { useRef, useState ,useEffect} from 'react';

export default function Guess() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [updated, setUpdated] = useState('');
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => 
    count
    );
  }, [count]); // count variable add it here

  const handleClick = () => {
    //  "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
     
    if(inputRef.current.value>10)
    { 
     
     setCount((c) => c+1)
    }
    else
    {
      
     setCount((c) => c+1)
    } 
  };
  
  return (
    
    <div>
      <p> Check your Luck by entering the number.</p>
      <input
        ref={inputRef}
        type="number"
        id="message"
        name="message"
        placeholder='enter'
      /> 
       
      <button onClick={handleClick}>Update</button>
     
      <h2>  {updated>0&&updated<10?"Its a right guess :)":" "} 
       {updated>10?"wrong guess:(":" "}   </h2><br/>
      Total attempts: {calculation}
    </div>
  );
}
