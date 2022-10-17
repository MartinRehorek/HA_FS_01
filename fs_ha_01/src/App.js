import './App.css';
import SummaryBox from './components/summaryBox'
import TeachersCard from './components/teachersCard';
import { SUMMARY_BOX_DUMMY_DATA, TABLE_COMPONENT_DATA } from './storage/dummyData';
import Graph from './components/graph';
import Container from '@mui/material/Container';
import TableComponent from './components/table';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

function App() {
  const someCallBack = () => {
    console.log("some call back function");
    return;
  };

  return (
    <div className="App">
      <Container>
        <SummaryBox data={SUMMARY_BOX_DUMMY_DATA}></SummaryBox>
        <Grid container spacing={2} sx={{alignItems: "stretch" }}>
        <Grid xs={6}>
        <Typography variant="h6" sx={{ Width: "sm", h: 2, textAlign: "left", fontWeight: 'bold' }}>
          Dnešní Lektor
        </Typography>
        <TeachersCard someCallBack={someCallBack}></TeachersCard>
        </Grid>
        <Grid xs={6}>
        <Typography variant="h6" sx={{ Width: "sm", h: 2, textAlign: "left", fontWeight: 'bold' }}>
        Průběžné hodnocení podle témat
        </Typography>
        <Graph></Graph>
        </Grid>
        </Grid>
        <Typography variant="h6" sx={{ Width: "sm", h: 2, textAlign: "left", fontWeight: 'bold', marginTop: "10px" }}>
        Studenti
        </Typography>
        <TableComponent data={TABLE_COMPONENT_DATA}></TableComponent>
        </Container>
    </div>
  );
}

export default App;
