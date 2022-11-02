import React, { useEffect, useState } from 'react';


    function Top() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        console.log("Bottom rendered");
      });
    
      return (
        <div>
          
          <Middle />
        </div>
      );
    }
    
    function Middle() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        console.log("Middle rendered");
      });
    
      return (
        <div>
          
          <Bottom />
        </div>
      );
    }
    
    function Bottom() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        console.log("Top rendered");
      });
    
      return <div></div>;
    }

export default Top;