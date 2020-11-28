import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {API_HOST_NAME} from "../../shared/routes";
import {useHistory} from "react-router-dom";
import {useQuery} from "../../hooks/useQuery";

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

const courseShape = {
    "id": "",
    "title": "",
    "imagePath": "",
    "price": {
        "normal": "",
        "early_bird": ""
    },
    "dates": {
        "start_date": "",
        "end_date": ""
    },
    "duration": "",
    "open": false,
    "instructors": [],
    "description": ""
};

export default function CourseForm({location}) {
    const { course, pathname } = location;

    const classes = useStyles();
    const history = useHistory();
    const [courseData, setNewCourse] = useState(course || courseShape);
    const { sendRequest: addCourse } = useQuery(`${API_HOST_NAME}/courses`, 'POST', courseData);
    const { sendRequest: updateCourse } = useQuery(`${API_HOST_NAME}/courses/${courseData?.id}`, 'PATCH', courseData);

    const {
        title,
        instructors,
        duration,
        description,
        price,
        open: isOpen,
    } = courseData;

    // Depending on route we figure out what how to act [ add/edit ]
    const isNewCourse = pathname?.indexOf("new") > 0;

    // [ Helper function ] Update nested properties for names having char "."
    const onChangeNestedValues = ({target}) => {
        // Extract from native name attribute two names as nested properties (in state)
        // IE price.normal -> ['price', 'normal']
        const namesArray = (target?.name).split(".");

        if (namesArray?.length === 2) {
            setNewCourse({
                ...courseData,
                [namesArray[0]]: {
                    ...courseData[namesArray[0]],
                    [namesArray[1]]: target.value
                }
            });
        }
    };

    const onChangeInputHandle = (e) => {
        let { name, value } = e.target;

        // If type is file -> Extract only file name
        if (e.target.files && e.target?.files[0]?.name) {
            value = '/' + e.target.files[0].name;
        }

        setNewCourse({
            ...courseData,
            [name]: value
        });
    };

    const handleCheckInstructors = ({target}) => {
      let instructors = courseData?.instructors?.slice();

      if (instructors.includes(target?.value)) {
          instructors = instructors.filter(i => i !== target.value);
      } else {
          instructors.push(target.value);
      }

      setNewCourse({
          ...courseData,
          instructors
      });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isNewCourse) {
                await addCourse();
            } else {
                await updateCourse();
            }

            alert("Success!");
        } catch (e) {
            alert("Fail!");
        } finally {
            history.push("/");
        }
    };

    return (
        <Grid component="div" container>
            <Container maxWidth="lg" className={classes.formContainer}>
                <Typography variant="h2" color="textPrimary" component="p" className={classes.title}>
                    {isNewCourse ? "ADD COURSE" : "UPDATE COURSE"}
                </Typography>

                <Grid item xs={12}>
                    <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="title">Title *</InputLabel>
                            <Input required
                                   inputProps={{ pattern: "[0-9a-zA-Z ]{1,50}" }}
                                   placeholder="Title" name="title" id="title" value={title} onChange={onChangeInputHandle} />
                        </FormControl>

                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="duration">Duration *</InputLabel>
                            <Input required
                                   inputProps={{ pattern: "[0-9a-zA-Z- ]{1,50}" }}
                                   id="duration" placeholder="Duration" name="duration" value={duration} onChange={onChangeInputHandle} />
                        </FormControl>

                        <FormControl fullWidth className={classes.mb30}>
                            <InputLabel htmlFor="image_path">Image path</InputLabel>
                            <Input id="image_path"
                                   type="file"
                                   required
                                   placeholder="Image path" name="imagePath" onChange={onChangeInputHandle} />
                        </FormControl>

                        <FormControlLabel
                            value={isOpen}
                            control={<Checkbox color="primary" />}
                            label="Bookable"
                            name="open"
                            aria-required
                            labelPlacement="end"
                            onChange={onChangeInputHandle}
                        />

                        <hr style={{margin: '2em 0'}}/>

                        <Typography variant="h5" color="textPrimary" component="p" style={{marginBottom: '1em'}}>
                            Instructors
                        </Typography>

                        <FormControlLabel
                            value="01"
                            control={<Checkbox color="primary"/>}
                            label="John Tsevdos"
                            labelPlacement="end"
                            checked={instructors?.includes("01")}
                            onChange={handleCheckInstructors}
                        />

                        <FormControlLabel
                            value="02"
                            control={<Checkbox color="primary"/>}
                            label="Yannis Nikolakopoulos"
                            labelPlacement="end"
                            checked={instructors?.includes("02")}
                            onChange={handleCheckInstructors}
                        />

                        <hr style={{margin: '2em 0 3em 0'}}/>

                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            fullWidth
                            variant="outlined"
                            onChange={onChangeInputHandle}
                            placeholder="Description"
                            inputProps={{ pattern: "[0-9a-zA-Z ]{0,500}" }}
                            value={description}
                            name="description"
                            style={{margin: 0, padding: 0}}
                        />

                        <Typography variant="h5" color="textPrimary" component="p" style={{margin: '2em 0 1em 0'}}>
                            Dates
                        </Typography>

                        <TextField
                            id="date-start"
                            label="Start Date"
                            type="date"
                            required
                            inputProps={{
                                max: "2021-01-01",
                                min: "2020-11-27"
                            }}
                            defaultValue="2020-11-27"
                            name="dates.start_date"
                            onChange={onChangeNestedValues}
                            style={{margin: 0}}
                        />

                        <TextField
                            id="date-end"
                            label="End Date"
                            type="date"
                            required
                            inputProps={{
                                max: "2021-01-01",
                                min: "2020-11-27"
                            }}
                            defaultValue="2020-11-28"
                            name="dates.end_date"
                            style={{margin: '0 0 4em 3em'}}
                            onChange={onChangeNestedValues}
                        />

                        <Typography variant="h5" color="textPrimary" component="p" style={{marginBottom: '1em'}}>
                            Price
                        </Typography>

                        <FormControl className={classes.mb30}>
                            <InputLabel htmlFor="component-simple">Early Bid</InputLabel>
                            <Input placeholder="Early Bid" type="number" name="price.early_bird"
                                   required
                                   id="component-simple" value={price?.early_bird} onChange={onChangeNestedValues} />
                        </FormControl>

                        <FormControl className={classes.mb30} style={{marginLeft: "2em"}}>
                            <InputLabel htmlFor="component-simple">Normal Price</InputLabel>
                            <Input placeholder="Normal Price" type="number" name="price.normal"
                                   required
                                   id="component-simple" value={price?.normal} onChange={onChangeNestedValues} />
                        </FormControl>

                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '2em'}}>
                            <Button variant="contained" type="submit" size="large" color="primary">
                                {isNewCourse ? "Add course" : "Update course"}
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Container>
        </Grid>
    );
}
