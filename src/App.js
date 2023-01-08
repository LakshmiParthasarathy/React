import './App.css';
import GetName from './GetName';
import Assign from './Assign';
import Useexample from './Useexample';
import Dropdown from './Dropdown';
import Radioexample from './Radioexample';
import Checkbox from './Checkbox';
import Example from './Example';
import Arrayexample from './Arrayexample';
import Top from './Top';
import Useit from './Useit';
import Component from './Component';
import Ref from './Ref';
import Userefexam from './Userefexam';
import Name from './Name';
import Assignment from './Assignment';
import Register from './Register';
import Guess from './Guess';
import Tryit  from './Tryit';
import Countit from './Countit';
import Header from './Header';
import CompA from './CompA';
import CompB from './CompB';
import CounterHOC from './CounterHOC';
import Toprender from './Toprender';
import Practice from './Practice';
import Submit from './Submit';
import Assignsearch from './Assignsearch';
import SearchIt from './SearchIt';
import Practiceit from './Practiceit';
import DynamicRender from './DynamicRender';
import NumberKey from './NumberKey';
import Arrayit from './Arrrayit';
import LoginPage from './Login/LoginPage';
import Index from './Login/Index';
import Home from './crud/Home';
import Clock from './Clock';
import Comp from './Comp';
import FetchData from './api/FetchData';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ReferenceDemo from './ReferenceDemo';
import Simple from './Simple';
import Football from './Football';
import Goal from './Goal';
import MyForm from './MyForm';
import FavoriteColor from './FavoriteColor';
import Timer from './Timer';
import FuncLogicHome from './Func/FuncLogicHome';
import ClassLogin from './ClassLogin';
import Sample1 from './Sample1';


function App() {
  //const numbers =[2,5,6,7]
  /*const names =[
    {
      id:101,
      name:'Jack',
      age:23
    },
    {
      id:102,
      name:'Mark',
      age:23
    },
    {
      id:103,
      name:'Dave',
      age:24
    },
  ]*/
  return ( //jsx-html inside js
  <div className='App'>
    {/*<Timer/>*/}
  {/* <Arrayit data={names}/> */}

  {/*<Comp/>*/}
  {/*<FetchData/>*/}
  {/*<Tryit/>*/}

  {/*<ReferenceDemo/>*/}

{/*<Goal isGoal={true}/>
<FavoriteColor/>*/}
{/*<Home/>*/}

{/*<ClassLogin/>*/}

<CounterHOC/>
<CompA/>
<CompB/>

{/*<DynamicRender/>*/}

{/*<FetchData/>*/}



  
 </div>
  );
}

export default App;

