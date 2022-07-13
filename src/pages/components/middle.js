import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, display } from '@mui/system'




export default function Middle() {
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

   <Box sx={{flexGrow:1}}>
    <Grid container  spacing={2} >
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>

                </Grid>

                <Grid item xs={4}>

                </Grid>

    </Grid>
   </Box>

</section>

  </main>
  )
}
