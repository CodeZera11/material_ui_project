import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        background: 'white',
        padding: '50px',
    },
    icon:{
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
}));

export default useStyles; 