import React, { useState, useEffect } from 'react'
import Nav from './component/Nav'
import Todo from './component/ToDo'
import ClassMates from './component/ClassMates'

export default function App(props) {

  const [mates, setMates] = useState([])

  useEffect(() => {
    fetch('https://scratched-juniper-salto.glitch.me/kekambas')
      .then(response => response.json())
      .then(data => {
        const allClassMates = data;
        setMates(allClassMates);
      })
  },[])


  return (
    <>
      <Nav />

        <div className='contianer'>
          < Todo />
          <ClassMates mates={mates} />
        </div>
    </>
  )
}
