import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
        padding: '0 1em'
    },
    title: {
        margin: '1em 0em 1em .5em',
        fontFamily: 'Avenir'
    },
    mb30: {
        marginBottom: '30px'
    },
    formContainer: {
        background: '#fcf9f9',
        borderRadius: '15px',
        marginTop: '1em',
        paddingBottom: '4em'
    }
}));

const handleChange = (e) => console.log(e);

export default function ValidationTextFields() {
    const classes = useStyles();

    return (
        <Grid component="div" container>
            <Container maxWidth="lg" className={classes.formContainer}>
                <Typography variant="h2" color="textPrimary" component="p" className={classes.title}>
                    ADD COURSE
                </Typography>

                <Grid item xs={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="title">Title</InputLabel>
                            <Input placeholder="Title" id="title" value="" onChange={handleChange} />
                        </FormControl>

                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="duration">Duration</InputLabel>
                            <Input id="duration" placeholder="Duration" value="" onChange={handleChange} />
                        </FormControl>

                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="image_path">Image path</InputLabel>
                            <Input id="image_path" placeholder="Image path" value="" onChange={handleChange} />
                        </FormControl>

                        <FormControlLabel
                            value="Bookable"
                            control={<Checkbox color="primary" />}
                            label="Bookable"
                            labelPlacement="end"
                        />

                        <hr style={{margin: '2em 0'}}/>

                        <Typography variant="h5" color="textPrimary" component="p" style={{marginBottom: '1em'}}>
                            Instructors
                        </Typography>

                        <FormControlLabel
                            value="John Tsevdos"
                            control={<Checkbox color="primary" />}
                            label="John Tsevdos"
                            labelPlacement="end"
                        />

                        <FormControlLabel
                            value="Yiannis Nikolakopoulos"
                            control={<Checkbox color="primary" />}
                            label="Yiannis Nikolakopoulos"
                            labelPlacement="end"
                        />

                        <hr style={{margin: '2em 0 3em 0'}}/>

                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            fullWidth
                            defaultValue="Description"
                            variant="outlined"
                            placeholder="Description"
                            value=""
                            style={{margin: 0, padding: 0}}
                        />

                        <Typography variant="h5" color="textPrimary" component="p" style={{margin: '2em 0 1em 0'}}>
                            Dates
                        </Typography>

                        <TextField
                            id="date-start"
                            label="Start Date"
                            type="date"
                            defaultValue="2017-05-24"
                            style={{margin: 0}}
                        />

                        <TextField
                            id="date-end"
                            label="End Date"
                            type="date"
                            defaultValue="2017-05-24"
                            style={{margin: '0 0 4em 3em'}}
                        />

                        <Typography variant="h5" color="textPrimary" component="p" style={{marginBottom: '1em'}}>
                            Price
                        </Typography>

                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="component-simple">Early Bid</InputLabel>
                            <Input placeholder="Early Bid" id="component-simple" value="0" onChange={handleChange} />
                        </FormControl>

                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="component-simple">Normal Price</InputLabel>
                            <Input placeholder="Normal Price" id="component-simple" value="0" onChange={handleChange} />
                        </FormControl>

                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '2em'}}>
                            <Button variant="contained" size="large" color="primary">
                                Add Course
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Container>
        </Grid>
    );
}
