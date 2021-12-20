import React from 'react';
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery80Icon from '@mui/icons-material/Battery80';
import WifiIcon from '@mui/icons-material/Wifi';
const useStyles = makeStyles((theme) => ({
  topbar: {
    height: '44px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 15px 11px 33px',
  },
  time: {
    height: '18px',
    margin: '0 229px 0 0',
    fontFamily: 'Gilroy-Bold',
    fontSize: '15px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.3px',
    color: '#000',
  },
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.topbar}>
      <Grid item className={classes.time}>
        <Typography>9:41</Typography>
      </Grid>
      <Grid item>
        <SignalCellularAltIcon />
        <WifiIcon />
        <Battery80Icon />
      </Grid>
    </Grid>
  );
};

export default Topbar;
