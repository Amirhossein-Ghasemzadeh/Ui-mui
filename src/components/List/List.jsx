import React from 'react';
import { Grid, Typography } from '@mui/material';
import useStyles from './ListStyle.js';
import ArrowRight from '@mui/icons-material/ChevronRightSharp';

const List = () => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <Grid container alignItems='center'>
        <Grid item xs>
          <Typography className={classes.item}>Tir</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.price}>1,243,000T</Typography>
        </Grid>
        <ArrowRight className={classes.icon} />
      </Grid>
      <div className={classes.line_list}></div>
      <Grid container alignItems='center'>
        <Grid item xs>
          <Typography className={classes.item}>Khordad</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.price}>243,000T</Typography>
        </Grid>
        <ArrowRight className={classes.icon} />
      </Grid>
      <div className={classes.line_list}></div>
      <Grid container alignItems='center'>
        <Grid item xs>
          <Typography className={classes.item}>Ordibehesht</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.price}>10,340,000T</Typography>
        </Grid>
        <ArrowRight className={classes.icon} />
      </Grid>
      <div className={classes.line_list}></div>
      <Grid container alignItems='center'>
        <Grid item xs>
          <Typography className={classes.item}>Farvardin</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.price}>1,243,000T</Typography>
        </Grid>
        <ArrowRight className={classes.icon} />
      </Grid>
    </div>
  );
};

export default List;
