import React, { useState } from 'react'
import "../Style/Task4.css"

let img1 = "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png"
let img2 = "https://www.91-cdn.com/hub/wp-content/uploads/2023/11/POCO-F5.jpg"
let img3 = "https://www.91-cdn.com/hub/wp-content/uploads/2023/11/vivo-v29e-international-2.jpg"
let img4 = "https://www.91-cdn.com/hub/wp-content/uploads/2023/11/iphone-15-discount.jpg"
import next from "../assets/next.png"
import back from "../assets/back.png"


const Task4 = () => {

  let images = [img1,img2,img3,img4]
  const [imgIndex, setImageIndex] = useState(0) 


  const handleImage = (i)=>{
      setImageIndex(i)
  }

  const  handlePre = ()=>{

    if(imgIndex >0 && imgIndex < 4){
      setImageIndex(imgIndex-1)
      
    }

   
  }

  const handleNext = ()=>{
    if(imgIndex >=0 && imgIndex < 3){
      setImageIndex(imgIndex+1)

    }

   
    

    
  }

  return (
    <div className='container'>

      <div className='main-img'>
        <img className='main-image' src={images[imgIndex]} alt="" />
      </div>
      

      <div className='img-container'>
        <div className='icon-con'>
        <img  onClick={handlePre} className="img-icon"  src={back} alt="" />
        </div>
        {
          images.map((item, i)=>(

            <img onClick={()=>handleImage(i)} className='small-img' key={i} src={item} alt="" />

          ))
        }

        <div className='icon-con'>
        <img onClick={handleNext}  className='img-icon ' src={next} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Task4