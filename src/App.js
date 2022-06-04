import "./App.css";

function Navbar() {
  return (
    <nav className="flex flex-col gap-3 justify-between py-4 p-2 md:py-4 md:px-2 md:flex md:flex-row">
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
        <button className="flex p-1 py-1 px-2 text-sm border items-center justify-center bg-indigo-600 border-indigo-600 text-white font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2">
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

        <button className="flex p-1 py-1 px-2 text-sm border items-center justify-center bg-indigo-600 border-indigo-600 text-white  font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2">
          TOP STREAKS
        </button>

        <button className="flex p-1 py-1 px-2 text-sm border items-center justify-center bg-indigo-600 border-indigo-600 text-white  font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2">
          STATS
        </button>

        <button className="flex p-1 py-1 px-2 text-sm border items-center justify-center bg-indigo-600 border-indigo-600 text-white  font-bold rounded-full transition ease-in-out delay-150 hover:scale-95 duration-100 md:px-5 md:py-2">
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
        src="https://media.discordapp.net/attachments/982155655630696518/982416830570299402/unknown.png"
        className="h-56 pt-5"
        alt=""
      />
      <button className="bg-indigo-600 mt-5 text-white rounded-md p-3 border font-bold px-6 border-indigo-600 transition ease-in-out delay-150 hover:scale-95 duration-100">
        Select Wallet
      </button>
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
              src="https://media.discordapp.net/attachments/961107642208636948/982389271346430032/unknown.png"
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
              src="https://media.discordapp.net/attachments/961107642208636948/982389271346430032/unknown.png"
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
            <img src="https://i.imgur.com/OjGFzTQ.png" class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src="https://i.imgur.com/OjGFzTQ.png" class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>{" "}
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src="https://i.imgur.com/OjGFzTQ.png" class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>{" "}
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src="https://i.imgur.com/OjGFzTQ.png" class="h-8" alt="" />
            <p>Wallet (HJdS) flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src="https://i.imgur.com/YVf6nT1.png" class="h-8" alt="" />
            <p>flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
        <li class="p-4 border-black rounded-md border text-white font-medium flex items-center justify-between bg-gray-600">
          <div class="flex items-center space-x-4">
            <img src="https://i.imgur.com/YVf6nT1.png" class="h-8" alt="" />
            <p>flipped 0.1 and got rugged.</p>
          </div>
          <span class="text-gray-400">32 seconds ago</span>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Flip />
      <Plays />
      <Footer />
    </div>
  );
}

export default App;
