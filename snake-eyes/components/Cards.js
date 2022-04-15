import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fontFamily, maxHeight } from "@mui/system";
import { CardHeader } from "@mui/material";

export default function Cards({imageSource, name}){
    return(
        <div>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={imageSource}
        alt="green iguana"
      />
      <CardContent>
        <Typography fontSize="100%" paddingLeft={"40%"} fontFamily="LG">
          {name}
        </Typography>
      </CardContent>
    </Card>
    

        </div>


    )




}