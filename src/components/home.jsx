import React from 'react';
import Logo from '../assets/cjLogo.png' ;
import singleBlueberry from '../assets/singleBlueberry.png';
// import ScrollButton from '../assets';

const Home = () => {
  return (
    <section className="home bg-gray-200">
      <div className="container p-2 h-full">
        <div className="heroSection flex flex-col items-center justify-center pt-20 lg:flex-row lg:h-3/4  md:p-10 lg:gap-x-5">
          <div className="heroLogo lg:w-2/5 lg:rounded-lg  w-4/5 rounded-t-lg bg-white drop-shadow-xl flex items-center justify-center">
            <img 
            src={Logo} 
            alt="Eating with CJ" />
            <img
              src={singleBlueberry}
              className="singleBlueberry absolute"
              style={{ scale: '10%' }}
              alt=""
            />
          </div>
          <div className="signUpContent lg:w-2/5 w-4/5 lg:px-10 md:h-3/5 lg:h-3/5 lg:rounded-lg rounded-b-lg bg-white drop-shadow-xl">
            <form action="" className="subscribeForm m-1 h-full flex flex-col justify-center">
              <h1> -Subscribe to Newsletter-</h1>
              <div>
                    <input type="text" className="border border-gray-300 rounded-md p-2 mb-2 w-1/2 lg:w-full" placeholder="First Name" />
                    <input type="text" className="border border-gray-300 rounded-md p-2 mb-2 w-1/2 lg:w-full" placeholder="Last Name" />
              </div>
                    <input type="email" className="border border-gray-300 rounded-md p-2 mb-2" placeholder="Email" />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="nextPgBtn flex items-center justify-center cursor-pointer p-12">
          <div 
          // src={ScrollButton} 
          className="h-10 w-10 cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;