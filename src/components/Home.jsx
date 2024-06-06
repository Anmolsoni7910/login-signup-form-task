import React from 'react'
import { auth } from '../firebase';

const Home = () => {

  async function handleLogout(){
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!!!");
    } catch (error) {
      console.log("Error logging out: ", error.message);
    }
  }

  return (
    <div className='p-2 bg-indigo-300 h-screen w-screen overflow-hidden flex flex-col items-center justify-center'>
        <p className='text-4xl w-full text-center'>The login and signup forms working perfectly!!!</p>
        <button onClick={handleLogout} className='text-4xl mt-10 bg-blue-500 hover:bg-blue-800 duration-200 hover:scale-105 text-white px-4 py-2 rounded-xl'>Logout</button>
    </div>
  )
}

export default Home