import React from 'react'
import SmallCrd from './smallCard'
import "./smallCards.scss"
const smallCards = () => {
  return (

    <div className='small-cards'>
        <SmallCrd/>
        <SmallCrd/>
        <SmallCrd/>

    </div>
  )
}

export default smallCards