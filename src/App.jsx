import Topbar from './components/Topbar/Topbar.jsx';
import Card from './components/Card/Card.jsx';
import Date from './components/Date/Date.jsx';
import Bottom from './components/Bottom/Bottom.jsx';
import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import List from './components/List/List.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '375px',
    height: '667px',
    backgroundColor: '#f7f9fc',
    margin: '10px auto',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline /> 
      <div className={classes.container}>
        <Topbar />
        <Card />
        <Date />
        <List />
        <Bottom />
      </div>
    </>
  );
}

export default App;
