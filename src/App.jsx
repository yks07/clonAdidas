import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import {HiOutlineHeart} from 'react-icons/hi'
import { products } from './assets/DataProduct';
import Header from './header';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  boxShadow: "none",
  color: theme.palette.text.secondary,
}));

function App() {
  return ( 
    <Box sx={{ flexGrow: 1 }}>
       <Header />
      <Grid container spacing={0.2}>
      {products.map(product=> 
          <Grid key={product.id} item sm={6} md={4} lg={3}>
          <Item>
            <Stack position='relative'>
              <img src={product.image} />
              <Box sx={{position: 'absolute', right: '12px', top: '14px'}}>
                <HiOutlineHeart size={18} color='#000000'/>         
              </Box>
              <Box sx={{ position: 'absolute', bottom: 0, left: '5px', backgroundColor: 'white', px: '5px', display: 'flex', flexDirection: 'row', gap: '10px'}}>
                {
                  product.discount > 0 
                  ? <>
                      <Typography sx={{textDecoration: 'line-through'}} fontSize="14px" color= '#000#d3d7da' fontWeight='300'>
                        {product.price}
                      </Typography>
                      <Typography fontSize="14px" color= '#DF0101' fontWeight='300'>
                       $ {product.discount}
                      </Typography>
                      
                    </>                  
                  : <Typography fontSize="14px" color= '#000' fontWeight='300'>
                     $ {product.price}
                    </Typography>
                }
              </Box>
            </Stack>
            <Stack padding='3px'>
                <Typography fontSize="14px" color="#000000"> {product.title} </Typography>
                <Typography fontSize="12px"> {product.category} </Typography>
                <Box display='flex' flexDirection='row' gap={1}>
                  {
                    product.colors.length > 0 
                    ? <>
                        <Typography fontSize="12px"> {product.colors.length} colores</Typography>
                      </>
                    : <Typography fontSize="14px" color= '#DF0101' fontWeight='300'>
                        Agotado
                      </Typography>
                  }
                  {
                    product.freeShipping 
                    ? <>
                        <span>&#8226;</span>
                        <Typography fontSize="12px" color="#000000"> envio gratis </Typography>
                      </>
                    : <></>
                  }
                  
                </Box>
              </Stack>
          </Item>
        </Grid>
      )}
      </Grid>
    </Box>
  );
}
 
export default App;