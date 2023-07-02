import React from 'react'
import '@fontsource/roboto/700.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from './styles';
import Stack from '@mui/material/Stack';

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {

    const classes = useStyles()

    return (
        <>
            <CssBaseline/>
                <AppBar position='relative'>
                    <Toolbar>
                        <PhotoCamera className={classes.icon}/>
                        <Typography variant='h6'>
                            Photo Album
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth='sm'>
                            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>
                            <Typography variant='h6' align='center' color="textSecondary" paragraph>
                                Hello everyone this is a sample text and i am trying to keep it as long as possible so please bear with me and type as much as you can.
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                >
                                <Button variant="contained">See my photos</Button>
                                <Button variant="outlined">Secondary action</Button>
                            </Stack>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth='md'>
                            <Grid container spacing={4}>
                                {cards.map((card)=> (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image='https://source.unsplash.com/random'
                                                title='Image Title'
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant='h5' gutterBottom>
                                                    Heading
                                                </Typography>
                                                <Typography>
                                                    This is media card. Enter all your content here.
                                                </Typography>
                                            </CardContent>
                                                <CardActions>
                                                    <Button size='small' color='primary'>View</Button>
                                                    <Button size='small' color='primary'>Edit</Button>
                                                </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                    </Container>
                </main>
                <footer justify='center' className={classes.footer}>
                    <Typography variant='h6' align='center'>
                        Footer
                    </Typography>
                    <Typography variant='subtitle1' align='center'>
                        This is footer
                    </Typography>
                </footer>
        </>
    )
}

export default App