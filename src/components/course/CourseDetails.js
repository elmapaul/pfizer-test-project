import React, { useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from '@material-ui/core/CircularProgress';
import {API_HOST_NAME, COURSE_EDIT} from "../../shared/routes";
import {Link, useParams, useHistory} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {useQuery} from "../../hooks/useQuery";

const useStyles = makeStyles(() => ({
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
    const [snackIsOpen, setSnackIsOpen] = useState(false);

    const history = useHistory();
    const { id } = useParams();

    const { data: course, loading: courseLoading } = useQuery(`${API_HOST_NAME}/courses/${id}`);
    const { data: instructors, loading } = useQuery(`${API_HOST_NAME}/instructors`);
    const { sendRequest: deleteCourse } = useQuery(`${API_HOST_NAME}/courses/${id}`, 'DELETE');

    const handleDeleteCourse = async () => {
        try {
            await deleteCourse();

            setSnackIsOpen(true);

            setTimeout(() => {
                history.push("/");
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

            {(!loading || !courseLoading) && !!course &&
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

                            {instructors && instructors
                                // Filter contained instructors in course object
                                .filter(i => course?.instructors?.includes(i?.id))
                                .map(({name, dob, email, linkedin, bio}, id) =>
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
                                        <br/><hr/>
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
