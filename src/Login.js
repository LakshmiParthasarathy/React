import { useEffect, useState } from "react";

const users = [
  {
    username: 'admin1',
    password: '12345678'
  },
  {
    username:'admin2',
    password:'012345678'
  }
];
export default function Login() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const changeHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

 function checkUser() {
    const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
   
    if(usercheck) {
      console.log("right")
    }else {
      console.log("wrong")
    }
    // console.log(uname);
    console.log(usercheck);

  }

  useEffect(() => {
checkUser(users)
  }, [data.username, data.password])

  //console.log(data)
  return (
    <div className="App">
      <div className="input-text">
              <input
                type="text"
                name="username"
                value={data.username}
                placeholder="Username"
                onChange={changeHandler}
              />
          </div>
          <div className="input-text">
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={changeHandler}
            /><br/>

            <button onClick={checkUser()}>Submit</button>
            
          </div>
    </div>
  );
}
