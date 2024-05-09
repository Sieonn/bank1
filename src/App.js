import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { MakeAccount } from './MakeAccount';
import AccountInfo from './AccountInfo';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllAccountInfo from './AllAccountInfo';
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Join from './Join';
import Login from './Login';
import {MakeAccount} from './MakeAccount';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/> 
      {/* 고정 되는것  */}
      <Routes>
        <Route exact path ="/" element = {<Login/>} />
        <Route exact path ="/makeAccount" element = {<MakeAccount/>} />
        <Route exact path ="/accountInfo" element = {<AccountInfo/>} />
        <Route exact path ="/deposit" element = {<Deposit/>} />
        <Route exact path ="/withdraw" element = {<Withdraw/>} />
        <Route exact path ="/allAccountInfo" element = {<AllAccountInfo/>} />
        <Route exact path ="/join" element = {<Join/>} />
      {/* <MakeAccount/> */}
      {/* <AccountInfo /> */}
      {/* <Deposit/> */}
      {/* <Withdraw /> */}
      {/* <AllAccountInfo/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
