import React from 'react'
import { Box, display } from '@mui/system'
import logo from "../Images/Frame33_logo.png"
import hotelImage from "../Images/Frame33_Rectangle2.jpg"
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import profileImage from "../Images/Frame33_Ellipse3.png"
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
export default function Header() {
  return (
  <>
    <Box sx={{width:"100%",height:"500px", backgroundColor:"#048BCC", margin:"0 0 70px 0"}}>
      <nav style={{background:"#5DBBFF",width:"100%"}}>
        <img src={logo} className="logo"/>
        <ul style={{float:"right",display:"inline-block"}}>
       <HomeIcon sx={{ fontSize: 40 }} /> <li style={{display:"inline-block"}}>Home</li>
         <AdminPanelSettingsRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"}}>admin</li>
           <BookRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"}}>Bookings</li>
         <LogoutRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"  }}>logout</li>
        </ul>
      </nav>
      <div style={{background:"black",opacity:0.7,height:"80%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        
  <img src={hotelImage} style={{width:"auto",height:"100%"}}/>
      </div>
      <div className='' ><img src={profileImage} style={{borderRadius:"100px"}} className="profileIMGHomePage"/></div>
    </Box>

        </>
  )
}
