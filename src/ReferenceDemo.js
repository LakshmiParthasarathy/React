function ReferenceDemo() {
  return <h2>I am a Car!</h2>;
<Garage/>
}

function Garage() {
  return (
    <div>
	    <h1>Who lives in my Garage?</h1>
	    <ReferenceDemo />
      </div>
  );
}


export default ReferenceDemo;