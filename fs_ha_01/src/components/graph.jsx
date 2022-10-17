import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import graphUrlImage from '../img/basic-bar-graph.png';

export default function Graph() {
    return (

        <React.Fragment>
        <CssBaseline />
        <Card>
          <CardMedia
            component="img"
            alt="Graph"
            src={graphUrlImage}
          />
        </Card>
        </React.Fragment>
      );
}