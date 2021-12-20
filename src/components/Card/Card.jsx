import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import SettingIcon from '../../components/assets/icons/group-2-copy.svg';
import useStyles from './cardStyle';

const Card = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container alignItems='center' justifyContent='space-between'>
        {/* ---top */}
        <Grid item>
          <Box>
            <Typography className={classes.top_left}>Total Income</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.top_right}>
            Last Updates:
            <br />2 hours ago
          </Box>
        </Grid>
        {/* ---center */}
        <Grid item>
          <Box className={classes.center_price}>
            12,540,000<span className={classes.toman_word_center}>Toman</span>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ margin: '12px 4px 0px 0px' }}>
            <IconButton className={classes.setting}>
              <img src={SettingIcon} alt='setting' />
            </IconButton>
          </Box>
        </Grid>
        {/* ---line */}
        <div className={classes.line}></div>
        {/* ---withdrawal limit */}
        <Grid item>
          <Box className={classes.withdrawal_limit}>Withdrawal Limit</Box>
        </Grid>
        {/* ---bottom */}
        <Grid item>
          <Box className={classes.bottom_price}>
            12,400,000<span className={classes.toman_word_bottom}>Toman</span>
          </Box>
        </Grid>
        <Grid item>
          {/* <Box> */}
          <button className={classes.btn_withdrawal}>Withdrawal</button>
          {/* </Box> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
