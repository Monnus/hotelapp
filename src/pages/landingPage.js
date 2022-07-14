// import React from 'react'
import "./components/styles/landingpage.css"
import Header from "./components/header"
import Middle from "./components/middle"
import hotroom1 from "./Images/rooms/hotroom1.jpg"
import hotroom2 from "./Images/rooms/hotroom2.jpg"
import hotroom3 from "./Images/rooms/hotroom3.jpg"




export default function LandingPage() {

  const hotRoomsObj=[
    {
    hotRoomImg:hotroom1,
    roomName:"earth",
    discription:"",
    active:true,
    altText:"",
    statemessage(){
      return "Please sign in to review"
    },
    roomID:""
    }
    ,{
      hotRoomImg:hotroom2,
      roomName:"mars",
      discription:"",
      active:true,
      altText:"",
      statemessage(){
        return "Please sign in to review"
      },
      roomID:""
      
    },
    {
      hotRoomImg:hotroom3,
      roomName:"jupiter",
      discription:"",
      active:true,
      altText:"",
      statemessage(){
        return "Please sign in to review"
      },
      roomID:""

    }
  ]
  return (
    <div  className='Page'>
        <Header/>
          <Middle hotRoomsObj={hotRoomsObj}/>
        </div>
  )
}
