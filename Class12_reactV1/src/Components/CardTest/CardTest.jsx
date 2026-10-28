import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const CardTest=()=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfk2xu0MDIyIpDphR_7J91ty4SQkcVjAPVHImboqEKNn07X7opis2sJEBy&s=10"
          alt="Iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            La iguana que toma Cafe
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, debitis cum sint mollitia obcaecati aliquid expedita hic sit quo, quam molestiae ipsa animi explicabo repellendus doloribus vero recusandae modi minima?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Quieres ver la iguana tomando cafe?
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardTest;