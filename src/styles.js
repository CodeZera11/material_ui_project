import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        padding: '50px',
    },
    icon:{
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px',
        justifyContent: "center"
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
    footer: {
        backgroundColor: 'gray'
    }
}));

export default useStyles; 