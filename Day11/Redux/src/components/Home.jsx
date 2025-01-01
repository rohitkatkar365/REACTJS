import React from 'react'

function Home(props) {
console.log(props);

  return (
    <div>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" className='cart-wrapper' /> */}
        <h1>Home Component</h1>
        <div className='cart'>
            <div className='img-wrapper item'>
                <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png"/>
            </div>
            <div className='text-wrapper item'>
                <span>IPhone</span>
                <br />
                <span>Price : $1000.00</span>
            </div>
            <div className='btn-wrapper item'>
                <button onClick={()=>props.addToCartHandler({price:1000,name:"IPhone"})}>Add To Cart</button>
            </div>
        </div>
    </div>

  )
}

export default Home