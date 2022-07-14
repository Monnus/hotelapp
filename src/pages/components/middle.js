import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box, display } from '@mui/system'
import Container from '@mui/material/Container';



export default function Middle({hotRoomsObj}) {
  const colorReviewBtn=orange[500];





  return (
  <main>
<section>

<Box sx={{flexGrow:1, background:"#5DBBFF",color:"white",fontSize:"20px"}}>
<Grid container spacing={2} >
        <Grid item lg={4}>
<div>
    <h3 className='useCenter'>whats new</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.</p>
</div>

  </Grid>

    <Grid item lg={4}>
    <div>
    <h3 className='useCenter'>Special deals</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.    
    </p>
</div>

 
  </Grid>


<Grid item lg={4}>
    <div>
    <h3 className='useCenter'>spacial events</h3>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.    </p>
 </div>
</Grid>

        </Grid>

</Box>

</section>

<section>

<Container maxWidth="lg" sx={{}}>
<Box  sx={{background:"lightblue",display:"flex",justifyContent:"space-between",height:"500px"}}>
{hotRoomsObj.map((obj)=>{
  return( 
  <>
    <Card sx={{ maxWidth: 445,maxHeight:350}} key={obj.roomName}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={obj.hotRoomImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {obj.roomName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary">
          Review
        </Button>
      </CardActions>
    </Card>
  
  </>
  
    )
})}



</Box>


</Container>
</section>

  </main>
  )
}
