import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import InfoBox from "./components/InfoBox";
import { makeStyles } from '@material-ui/core/styles';
import TableGrid from "./components/TableGrid";
import CourseCard from "./components/CourseCard";
import CourseDetails from "./components/CourseDetails";
import NewCourseForm from "./components/NewCourseForm";

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: "2em"
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <NavBar/>


            <NewCourseForm/>

            {/*<Jumbotron/>*/}

            {/*<div>*/}
            {/*    <CourseDetails />*/}
            {/*</div>*/}

            {/*<div className={classes.boxContainer}>*/}
            {/*    <InfoBox text="STUDENTS" count="55"/>*/}
            {/*    <InfoBox text="STUDENTS" count="55"/>*/}
            {/*    <InfoBox text="STUDENTS" count="55"/>*/}
            {/*    <InfoBox text="STUDENTS" count="55"/>*/}
            {/*</div>*/}

            {/*<TableGrid />*/}

        </div>
    );
}

export default App;
