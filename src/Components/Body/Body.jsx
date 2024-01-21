import React, { useEffect, useState } from 'react'
import Card from './Card'
import Animation from './Animation'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Rasm from '../cyberpunk.jpg'
import Rasm2 from '../tg.jpg'
import Rasm3 from '../Mercyless.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className='h-96 m-auto' src={Rasm} onDragStart={handleDragStart} role="presentation" />,
    <img className='h-96 m-auto' src={Rasm2} onDragStart={handleDragStart} role="presentation" />,
    <img className='h-96 m-auto' src={Rasm3} onDragStart={handleDragStart} role="presentation" />,
  ];

const Body = () => {

    const [ data, setData] = useState([])
    const [load , setLoad] = useState(false)

    useEffect(() =>{

        setLoad(true)


        fetch("https://reqres.in/api/users?delay=3")
        .then(response => {
            if (response.ok){
                return response.json()
            }
            else{
                throw new Error('Issue with API!')
            }
        })
        .catch(error => console.log(error))
        .then(info => setData(info.data))
        .finally(()=> setLoad(false))
    }, [])

    console.log(data);

   


  return (
    <div className='Body bg-blue-400 flex justify-around pt-8 pb-14 flex-wrap'>
                    
         {
             load ? <Animation/> :
             data.map((value) =>{
                 return(
                     <>
                 <Card key={value.id} image={value.avatar} name={value.first_name} job={value.last_name} univer={value.email}/>
                     
                     </>
             )
         })
         }
        <AliceCarousel 
         mouseTracking items={items}
         activeIndex={1}
         animationDuration={1500}
         autoPlay={true}
         autoPlayControls={true}
         infinite={true}
         />
    </div>
  )
}

export default Body