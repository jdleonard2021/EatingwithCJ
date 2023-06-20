import React from 'react';
import Partfait from '../assets/Parfait.png';

function About() {
  return (
<section className="About bg-black flex h-screen w-screen items-center justify-center">
      <div className="container  h-4/5 mx-9 text-center">
        <div className="aboutSection lg:flex bg-gradient-to-r from-pink-500 to-rose-500  h-fit gap-x-5 rounded-md">
          <div className="aboutImage w-2/5 mx-auto rounded-lg flex items-center justify-center">
            <img src={Partfait} alt="Parfait"/>
            
          </div>
          <div className="aboutContent lg:w-3/5 lg:px-10 rounded-lg ">
            <div className="m-1 h-full flex flex-col justify-center">
              <h1 className="font-extrabold text-4xl text-center text-white ">
                GIVE YOURSELF <br/> A HIGH FIVE OF FRUITS AND VEGETABLES DAILY <br/>
                & YOUR HEALTH WILL BE SOMETHING TO CELEBRATE!
              </h1>
                <ul className="lg:flex sm:block gap-6 mt-5 font-bold  text-center justify-center text-xl py-4 text-white">
                    <li className="aboutli">Reciepts</li>
                    <li className="aboutli">Gardening Tips</li>
                    <li className="aboutli">View Blog</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="nextPgBtn flex items-center justify-center h-1/4 cursor-pointer">
          {/* <button id="scrollButton" className="h-10 w-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button> */}
          <div className="h-10 w-10 cursor-pointer">
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
  )
}

export default About;