import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    height: '72px',
    gridTemplateColumns: 'repeat(3, auto)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 6px 10px 0 rgba(131, 134, 163, 0.12)',
  },
  i_1: {
    padding: '20px 47px 20px 46px',
  },

  i_2: {
    padding: '24px 50px 24px 51px',
  },

  i_3: {
    padding: '24px 53px 24px 55px',
  },
  btn :{ 
    border: 'none',
    background: '#fff',
  }
}));
export default useStyles;
