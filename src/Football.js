function Football() {
    const shoot = (a,b) => {
      alert(b.type);
    }
  
    return (
      <button onClick={(val) => shoot("Goal!",val)}>Take the shot!</button>
    );
  }

  export default Football;