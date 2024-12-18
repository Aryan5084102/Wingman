import React from 'react'
import Glance from '../component/Glance'
import Insights from '../component/Insights'
import Orders from '../component/Orders'


const Main = () => {
  return (
    <div className='flex flex-col mx-10 my-5 h-auto bg-white rounded-2xl p-5 shadow-2xl'>
      <Glance />
      <Insights />
      <Orders />
    </div>
  )
}

export default Main