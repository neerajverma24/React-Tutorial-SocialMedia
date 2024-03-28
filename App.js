import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList';
import HookUseState from './HookUseState';
import ObjectUseState from './ObjectUseState'
import EventHandling from './EventHandling';
import EventObjPara from './EventObjPara';
import ListKeys from './ListKeys';
import EventBinding from './EventBinding';
import EventBinding2 from './EventBinding2';
import EventBinding3 from './EventBinding3';
import EventBinding4 from './EventBinding4';
import ReactForm from './ReactForm';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import UpdatedComponentHOC from './UpdatedComponentHOC';
import Item1HOC from './Item1HOC';
import Item2HOC from './Item2HOC'
import RenderingList from './RenderingList';


import { useState } from 'react';  // for the Prop Drilling
import ParentPropDril from './ParentPropDril';
import HookEffectCounter from './HookEffectCounter';
import HookEffectCleanup from './HookEffectCleanup';
import HookRef from './HookRef';

import QRFile from './components/QR Code/QRFile';

import Items from './components/LocalStorage/Items';


function App() {
  const [count, setCount] = useState(0)  // For the Prop Drilling
  return (
    <div className="App">

      {/* <h1>Welcome to React js</h1> */}

      {/* Event Handling... ===============================================*/}
      {/* <EventHandling /> */}
      {/* <EventObjPara /> */}

      {/* List and Keys =================================================== */}
      {/* <ListKeys /> */}
      {/* <GroceryList /> */}

      {/* Event Binding =============================================*/}
      {/* <EventBinding />   (Binding in Constructor) */}
      {/* <EventBinding2 />  (Arrow function in Class Component) */}
      {/* <EventBinding3 />  (Inline Arrow function) */}
      {/* <EventBinding4 />  (Binding in Function Component using useCallBack Hook)*/}

      {/* React Form JS ================================*/}
      {/* <ReactForm /> */}

      {/* React Controlled and Uncontrolled Component ==============================*/}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent /> */}

      {/* React Higher Order Components HOC ================================ */}
      {/* <UpdatedComponentHOC /> */}
      {/* <Item1HOC /> */}
      {/* <Item2HOC /> */}


      {/* Prop Drilling in React JS======================================== */}
      {/* <h1>App Component</h1>
      <h2>Count : {count}
        &nbsp; &nbsp;<button onClick={() => setCount(count + 1)}>Increase</button>
      </h2> */}
      {/* What is here :-  Passing PROPS to PARENT */}
      {/* <ParentPropDril counter={count} /> */}

      {/* <ChildPropDril />         // Both these child and grandchild component used above, do not need to uncomment this file...*/}
      {/* <GrandChildPropDril /> */}


      {/* <RenderingList /> */}


      {/* 1. useState Hook ====================================================*/}
      {/* <HookUseState /> */}
      {/* <ObjectUseState /> */}


      {/* 2. useEffect Hook ================================================== */}
      {/* <HookEffectCounter /> */}
      {/* <HookEffectCleanup /> */}


      {/* 3. useRef Hook ==================================================== */}
      {/* <HookRef /> */}


      {/* Creating folder QR Code */}
      {/* <QRFile /> */}


      {/* Creating Folder for useLocalStorage Hook */}
      <Items />

    </div>
  );
}

export default App;
