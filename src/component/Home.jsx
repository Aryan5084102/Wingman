import React from 'react'
import Sidebar from '../component/Sidebar'
import Main from '../component/Main'
import Header from './Header'


const Home = () => {
    return (
        <div className='flex bg-gray-100'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='flex flex-col w-full'>
                <Header  />
                <Main />
            </div>
        </div>
    )
}

export default Home