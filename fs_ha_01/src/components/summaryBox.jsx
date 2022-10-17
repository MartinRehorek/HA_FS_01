import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';

export default function SummaryBox(props) {
  const data = props.data
  //id
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2}>
    { data.map( element => (
      <Grid id={element.title} xs={12/data.length} >
        <Card>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {element.title}
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {element.value}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
  
}



