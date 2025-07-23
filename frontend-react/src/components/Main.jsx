import React from 'react'
import Button from './Button'


const Main = () => {
  return (
   <>
   <div className='container'>
    <div className="p-5 text-center bg-light-dark rounded">
      <h1 className="text-light">Stock Prediction Portal</h1>
      <p className="text-light lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Eveniet, sint similique quo ut maiores voluptate. Eaque itaque, sequi asperiores
          doloribus laudantium esse quaerat earum numquam veniam voluptates? Ut, ullam tempora!
      Eos eveniet maiores modi ipsum placeat omnis dolor doloribus illum velit. Iure dolorum alias
       tempore necessitatibus nihil? Omnis voluptatibus, earum ratione fuga 
       nobis iusto quas recusandae qui id exercitationem aperiam.</p>
       <Button text='Login' class='btn-outline-info' url='/login'/>
    </div>
   </div>
   </>
  )
}

export default Main