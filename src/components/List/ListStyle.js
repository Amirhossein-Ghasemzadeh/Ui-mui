import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    height: '195px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '16px 16px 82px',
    objectFit: 'contain',
    padding: '12px',
    borderRadius: '12px',
    boxShadow: '0 6px 10px 0 rgba(131, 134, 163, 0.12)',
    backgroundColor: '#fff',
  },
  item: {
    fontFamily: 'Gilroy',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.35px',
    color: '#242833',
  },
  price: {
    fontFamily: 'Gilroy',
    fontSize: '16px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    textAlign: 'center',
    color: '#00c7be',
  },
  line_list: {
    width: '100%',
    height: '1px',
    margin: '12px',
    border: 'solid 1px #efeff4',
  },
  icon: {
    margin: '0px 4px 0px 8px',
  },
}));

export default useStyles;
