import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
           <div className='bg-cover bg-bottom h-screen flex w-full  justify-between flex-col pt-8 bg-[url(https://images.pexels.com/photos/11060589/pexels-photo-11060589.jpeg?cs=srgb&dl=pexels-dpranka-11060589.jpg&fm=jpg)]' >
            <img src=" https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" className='w-16 ml-8' alt="" />
                 <div className='bg-white px-4 py-10 pb-7'>
                    <h2 className='text-4xl font-bold'>Get started with Uber</h2>
                    <Link to='/login'  className='bg-black text-white w-full py-3 rounded mt-5 flex justify-center items-center'>Continue</Link>
                 </div>
           </div>
        </div>
    );
}

export default Home;