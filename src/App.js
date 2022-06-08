import "./App.css";
import { useState } from 'react';
import logo from './images/coin-logo.png';
import greencoin from './images/green-coin.png';
import redcoin from './images/red-coin.png';
import nft1 from './images/nft-profile-1.png';
import nft2 from './images/nft-profile-2.png';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex flex-col gap-3 justify-between py-4 p-2 md:py-4 md:px-2 md:flex md:flex-row md:gap-1">
      <div className="hidden pl-2 md:flex">
        <button className="p-1 px-5 py-2 border border-white rounded-md mr-4 hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/*<button className='flex p-1 py-2 px-5 text-sm border items-center justify-center border-black rounded-md'>LIGHT<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg></button>*/}
      </div>

      <div className="flex pr-0 gap-3 justify-center md:pr-2">
        <button className="flex p-1 py-1 px-2 text-xs border items-center justify-center bg-indigo-600 border-indigo-600 text-white font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2 md:text-sm">
          RECENT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button className="flex p-1 py-1 px-2 text-xs border items-center justify-center bg-indigo-600 border-indigo-600 text-white  font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2 md:text-sm">
          TOP STREAKS
        </button>

        <button className="flex p-1 py-1 px-2 text-xs border items-center justify-center bg-indigo-600 border-indigo-600 text-white  font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2 md:text-sm">
          STATS
        </button>

        <button className="flex p-1 py-1 px-2 text-xs border items-center justify-center bg-indigo-600 border-indigo-600 text-white  font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2 md:text-sm">
          LIVEPLAYS
        </button>
      </div>
    </nav>
  );
}

function Flip() {
  return (
    <div className="flex flex-col mx-auto items-center">
      <h1 className="md:text-3xl pt-10 text-white font-bold text-">
        #1 MOST TRUSTED PLACE TO FLIP
      </h1>
      <img
        src={logo}
        className="h-56 pt-5"
        alt=""
      />
<Link to="/flip">
      <button className="bg-indigo-600 mt-5 text-white rounded-md p-3 border font-bold px-6 border-indigo-600 transition ease-in-out delay-150 hover:scale-95 duration-100">
        Select Wallet
      </button>
</Link>
    </div>
  );
}

function Plays() {
  return (
    <div className="flex flex-col mx-auto items-center">
      <h1 className="text-3xl pt-10 text-white font-bold">RECENT PLAYS</h1>

      <ul class="flex flex-col pt-5 border-black">
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img
              src={redcoin}
              class="h-8"
              alt=""
            />
            <p>flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img
              src={greencoin}
              class="h-8"
              alt=""
            />
            <p>
              Wallet (8cMg) flipped 0.05 and{" "}
              <span className="text-green-400">doubled</span>
            </p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src={redcoin} class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src={redcoin} class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>{" "}
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src={redcoin} class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>{" "}
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src={redcoin} class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src={redcoin} class="h-8" alt="" />
            <p>flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src={redcoin} class="h-8" alt="" />
            <p>flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
      </ul>
    </div>
  );
}

function Wallet(){
  return(
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

<div className="bg-gray-900 p-6 rounded w-72">

  <div className="flex">
        <h1 className="text-center text-2xl text-gray-200 pl-16 mr-10">
          Connect Wallet
        </h1>
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
</div>


<div className="flex flex-col items-center">
<div className="flex justify-between">
  <h1>Phantom</h1>
  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K"/>
  </div>
</div>

      </div>


    </div>
  )
}

function Footer() {
  return <footer></footer>;
}

function Home(){
  return(
    <div>
    <Navbar />
      <Flip />
      <Plays />
      <Footer />
    </div>
  );
}

function FlipPage(){
const [flipping, setFlipping] = useState("heads");
const [width,setWidth] = useState(100);

const Heads = () => {
  setFlipping("heads");
  setWidth(100);
}

const Tails = () => {
  setFlipping("tails")
  setWidth(92);
}


  return(
    <div>
<Navbar/>

<div className="flex justify-center">
<img src={nft1} className="h-14"/>
<img src={nft2} className="h-14 pl-5"/>
</div>


<hr
        style={{
          color: '#adacac',
          opacity: "0.5",
    backgroundColor: '#adacac',
    width: 400, 
    borderColor : '#adacac'
        }}
        className="mx-auto mt-5"
    />


<div className="flex flex-col mx-auto items-center mt-5">
<img src={flipping==="heads" ? greencoin : redcoin} style={{width}}/>
<h2 className="mt-5 text-white text-xl">I LIKE</h2>

<div className="flex">
<button onClick={Heads} className="mr-10 bg-indigo-600 mt-5 text-white rounded-md p-3 border font-bold px-8 border-indigo-600 focus:bg-gray-600 focus:border-black focus:ring-black transition ease-in-out delay-150 hover:scale-95 duration-100">HEADS</button>
<button onClick={Tails} className="bg-indigo-600 mt-5 text-white rounded-md p-3 border font-bold px-9 border-indigo-600 focus:bg-gray-600 focus:border-black transition ease-in-out delay-150 hover:scale-95 duration-100">TAILS</button>
</div>


<h2 className="mt-5 text-white text-xl">FOR</h2>

<div class="inline-grid grid-cols-3 gap-5 p-5">
  <label>
    <input type="checkbox" class="peer hidden" />
    <span class="inline-block w-full rounded-md border border-indigo-600 bg-indigo-600 p-3 px-4 font-bold text-white transition delay-150 duration-100 ease-in-out hover:scale-95 peer-checked:border-black peer-checked:bg-gray-600">.05 SOL</span>
  </label>
  <label>
    <input type="checkbox" class="peer hidden" />
    <span class="inline-block w-full rounded-md border border-indigo-600 bg-indigo-600 p-3 px-4 font-bold text-white transition delay-150 duration-100 ease-in-out hover:scale-95 peer-checked:border-black peer-checked:bg-gray-600">.01 SOL</span>
  </label>
  <label>
    <input type="checkbox" class="peer hidden" />
    <span class="inline-block w-full rounded-md border border-indigo-600 bg-indigo-600 p-3 px-4 font-bold text-white transition delay-150 duration-100 ease-in-out hover:scale-95 peer-checked:border-black peer-checked:bg-gray-600">.25 SOL</span>
  </label>
  <label>
    <input type="checkbox" class="peer hidden" />
    <span class="inline-block w-full rounded-md border border-indigo-600 bg-indigo-600 p-3 px-4 font-bold text-white transition delay-150 duration-100 ease-in-out hover:scale-95 peer-checked:border-black peer-checked:bg-gray-600">.5 SOL</span>
  </label>
  <label>
    <input type="checkbox" class="peer hidden" />
    <span class="inline-block w-full rounded-md border border-indigo-600 bg-indigo-600 p-3 px-4 font-bold text-white transition delay-150 duration-100 ease-in-out hover:scale-95 peer-checked:border-black peer-checked:bg-gray-600">1 SOL</span>
  </label>
  <label>
    <input type="checkbox" class="peer hidden" />
    <span class="inline-block w-full rounded-md border border-indigo-600 bg-indigo-600 p-3 px-4 font-bold text-white transition delay-150 duration-100 ease-in-out hover:scale-95 peer-checked:border-black peer-checked:bg-gray-600">2 SOL</span>
  </label>
</div>

<hr
        style={{
          color: '#adacac',
          opacity: "0.5",
    backgroundColor: '#adacac',
    width: 330, 
    borderColor : '#adacac'
        }}
        className="mx-auto mt-5"
    />

<button className="mr-5 bg-indigo-600 mt-5 text-white rounded-md p-3 border font-bold px-16 border-indigo-600 transition ease-in-out delay-150 hover:scale-95 duration-100">FINAL</button>

</div>
    
    </div>
  );
}

function App() {
  return (
    <Router>

      <div>
   <Route exact path="/" component={Home}/>
   <Route exact path="/flip" component={FlipPage}/>

    </div>
    </Router>
  );
}

export default App;
