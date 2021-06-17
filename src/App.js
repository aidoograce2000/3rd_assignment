import {Switch, Route} from 'react-router-dom'
import Signup from './assignment3/signup'
import Dashboard from './assignment3/dashboard'
import Profile from './assignment3/profile'
import Notifications from './assignment3/notification'
import button from './button'
function App() {
  return (
   <div>
   <Switch>

     
       <Route exact path='/' component={Signup} />
       <Route exact path='/dashboard' component={Dashboard} />
       <Route exact path='/profile' component={Profile} />
       <Route exact path='/notification' component={Notifications} />



    </Switch>

    <Signup/>



    </div>



  )
}


export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
