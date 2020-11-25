import React, { useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";
import {API_HOST_NAME, COURSE_EDIT} from "../../shared/routes";
import {Link, useParams, useHistory} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 400
    },
    mb20: {
        marginBottom: "10px"
    },
    mt40: {
        marginTop: "40px"
    },
    flexVertical: {
        display: 'flex',
        alignItems: 'center'
    },
    rowFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState({});
    const [instructors, setInstructors] = useState([]);
    const [snackIsOpen, setSnackIsOpen] = useState(false);

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        // Build specific URL with id
        const url = `${API_HOST_NAME}/courses/${("0" + id).slice(-2)}`;

        axios.get(url)
            .then(({data}) => {
                const courseDetails = data;
                setCourse(courseDetails);

                // Fetch all instructors
                axios.get(`${API_HOST_NAME}/instructors`)
                    .then(({data}) => {
                        // Filter by id only contained in course object
                        const filteredInstuctors = data?.filter(i => courseDetails?.instructors?.includes(i?.id));

                        setInstructors(filteredInstuctors);
                    })
                    .catch(_ => console.log('Error with instructors fetching!'))
                    .finally(() => setLoading(false));
            })
            .catch(_ => console.log('Error with courses fetching!'))
            .finally(() => setLoading(false));
    }, []);

    const handleDeleteCourse = async (id) => {
        try{
            await axios.delete(`${API_HOST_NAME}/courses/${id}`);

            setSnackIsOpen(true);

            setTimeout(() => {
                history.goBack();
            }, 1500);
        } catch {
            console.log("Error with deleting course!");
        }
    };

    if (loading) {
        return (
            <div style={{ marginTop: '8em', textAlign: 'center'}}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <>
            <br/>

            {!loading && !!course &&
                <Card>
                    <CardHeader title={course?.title}/>
                    <br/>
                    <CardMedia
                        className={classes.media}
                        image={course?.imagePath}
                        title={course?.title}
                    />
                    <br/>
                    <hr/>
                    <br/>
                    <CardContent>
                        <div className={classes.rowFlex}>
                            <div className={classes.mb20}>
                                <Typography variant="h3" color="textPrimary" component="p" className={classes.flexVertical}>
                                    Price: &nbsp;<b>{course?.price?.normal} EUROS</b>
                                </Typography>
                            </div>

                            <div className={classes.mb20}>
                                <Typography variant="h3" color="textPrimary" component="p" className={classes.flexVertical}>
                                    Bookable:&nbsp;
                                    {course?.open ? <CheckIcon style={{color: 'red'}}/> : 'NOT'}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.rowFlex}>
                            <div className={classes.mb20}>
                                <Typography variant="h3" color="textPrimary" component="p">
                                    Duration: &nbsp;<b>{course?.duration}</b>
                                </Typography>
                            </div>

                            <div className={classes.mb20}>
                                <Typography variant="h3" color="textPrimary" component="p">
                                    Dates: &nbsp;<b>{course?.dates?.start_date} - {course?.dates?.end_date}</b>
                                </Typography>
                            </div>
                        </div>

                        <p style={{display: 'flex'}}>
                            <Typography variant="body1" color="textPrimary" component="p" >
                                <span dangerouslySetInnerHTML={{__html: course?.description}}/>
                            </Typography>
                        </p>

                        <div className={classes.mb20}>
                            <Link to={{
                                pathname: COURSE_EDIT,
                                course
                            }} style={{textDecoration: "none"}}>
                                <Button variant="contained" color="default">
                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={() => handleDeleteCourse(course?.id)} variant="contained" color="secondary" style={{marginLeft: "1em"}}>
                                Delete
                            </Button>
                        </div>

                        {/*INSTRUCTORS SECTION*/}
                        <div className={classes.mt40}>
                            <Typography variant="h4" color="textPrimary" component="p">
                                Instructors
                            </Typography>
                            <br/>

                            {instructors?.map(({name, dob, email, linkedin, bio}, id) =>
                                (
                                    <span key={id}>
                                        <Typography variant="h5" color="textPrimary" component="p">
                                            {`${name?.first} ${name?.last} (${dob})`}
                                        </Typography>
                                        <br/>
                                        <Typography variant="h6" color="textPrimary" component="p">
                                            Email: {email} | <a href={linkedin} target="_blank">LinkedIn</a>
                                        </Typography>
                                        <br/>
                                        <Typography variant="h6" color="textPrimary" component="p">
                                            {bio}
                                        </Typography>
                                    </span>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            }

            <Snackbar open={snackIsOpen} autoHideDuration={6000}>
                <Alert severity="info">
                    Course has been removed successfully!
                </Alert>
            </Snackbar>
        </>
    );
}
