import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '16px',
    boxShadow: '0 6px 10px 0 rgba(131, 134, 163, 0.12)',
  },
  weekly: {
    width: '100%',
  },
  weekFont: {
    height: '40px',
    borderRadius: '12px',
    padding: '11px 0 12px',
    fontFamily: 'Gilroy-Regular',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.21',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#242833',
    backgroundColor: '#fff',
  },
  monthly: {
    width: '100%',
  },
  monthFont: {
    height: '40px',
    borderRadius: '12px',
    padding: '11px 0 12px',
    textAlign: 'center',
    fontFamily: 'Gilroy-Regular',
    objectFit: 'contain',
    color: '#fff',
    backgroundColor: '#242833',
  },
}));
const Date = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.weekly}>
        <Typography className={classes.weekFont}>Weekly</Typography>
      </Box>
      <Box className={classes.monthly}>
        <Typography className={classes.monthFont}>Monthly</Typography>
      </Box>
    </div>
  );
};

export default Date;
