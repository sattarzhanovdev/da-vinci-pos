import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';

export default function CardProduct({item}) {
  const [ dep, setDep ] = React.useState(null)
  const [ active, setActive ] = React.useState(null)

  const orders = JSON.parse(localStorage.getItem('newOrder'))
  const check = orders?.find(item => item?.id === item?.id)
  const index = orders?.findIndex(obj => obj.id === item?.id);

  React.useEffect(() => {
    setTimeout(() => {
      const check = orders?.find(obj => obj?.id === item?.id)
      check ? setActive(true) : setActive(false)
      setDep(Math.random())
    }, 100)
  }, [dep])

  
  const addToCart = () => {
    !active ? orders?.push({...item, count: 1}) : orders[index].count = orders[index].count + 1;
    localStorage.setItem('newOrder', JSON.stringify(orders))
  }

  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])
  return (
    <Card sx={{ maxWidth: 200 }} style={{margin: '25px'}} onClick={() => addToCart()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          {/* <Box display={'flex'} alignItems={'center'}>
            <Button
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50px',
                background: '#1c1c1c',
                color: 'white',
                fontSize: '25px'
              }}
            >
              -
            </Button>
            <Typography 
              variant='p'
              fontSize={20}
              marginLeft={'10px'}
              marginRight={'10px'}
            >
              1
            </Typography>
            <Button
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50px',
                background: '#1c1c1c',
                color: 'white',
                fontSize: '25px'
              }}
            >
              +
            </Button>
          </Box> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}