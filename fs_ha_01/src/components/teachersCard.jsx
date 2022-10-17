import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Unstable_Grid2';
import ContactButton from "./button";
import manUrlImage from "../img/man.jpeg";

export default function TeachersCard(props) {
 const someCallBack = props.someCallBack
  return (
    <React.Fragment>
      <CssBaseline />
        <Card sx={{ display: "flex", textAlign: "left", height: "auto"}}>
          <CardMedia
            style={{ width: 300, height: 300, paddingTop: "2%" }}
            component="img"
            alt="Lektor Jakub"
            height="140"
            src={manUrlImage}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" color="text">
              Lektor Jakub
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Mauris metus. Praesent in mauris eu tortor porttitor accumsan. Nulla non arcu lacinia neque faucibus fringilla. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Maecenas fermentum.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent : "flex-end"}}>
              <ContactButton
                size="large"
                sx={{marginLeft: "auto"}}
                someCallBack={someCallBack}
              ></ContactButton>
            </CardActions>
          </Box>
        </Card>
    </React.Fragment>
  );
}
