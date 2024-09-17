import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-nav-box">Description</div>
            <div className="discriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="discriptionbox-discription">
            <p>An e-commerce website is an online platform that
                 facilitate buying and selling of products or services oer the internet</p>
                 <p>E-commerce websites typically display products or services and detailed discriptions,images,prices, and any other items.</p>
        </div>
      
    </div>
  )
}

export default DiscriptionBox
