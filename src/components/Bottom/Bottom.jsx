import React from 'react';
import { Grid, Box } from '@mui/material';
import useStyles from './BottomStyle.js';
import coolIcon from '../assets/icons/cool.svg';
import IncomeIcon from '../assets/icons/income.svg';
import HouseIcon from '../assets/icons/house-2-1.svg';

const Bottom = () => {
  const classes = useStyles();
  return (
    <Grid containar className={classes.container}>
      <Grid item>
        <Box className={classes.i_1}>
          <button className={classes.btn}>
            <img src={IncomeIcon} alt='income'/>
          </button>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.i_2}>
          <button className={classes.btn}>
            <img src={HouseIcon} alt='house'/>
          </button>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.i_3}>
          <button className={classes.btn}>
            <img src={coolIcon} alt='cool'/>
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Bottom;
