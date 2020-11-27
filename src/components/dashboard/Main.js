import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Jumbotron from "./JumbotronComponent";
import InfoBoxComponent from "./InfoBoxComponent";
import TableGrid from "./TableGrid";
import {API_HOST_NAME} from './../../shared/routes';
import {useQuery} from './../../hooks/useQuery';

const useStyles = makeStyles({
    main: {
        minHeight: "100vh"
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "2em"
    }
});

const Main = () => {
    const classes = useStyles();

    const { data: stats } = useQuery(`${API_HOST_NAME}/stats`);
    const { data: courses } = useQuery(`${API_HOST_NAME}/courses`);

    return (
        <main className={classes.main}>
            <Jumbotron/>

            {/*Stats section*/}
            <div className={classes.boxContainer}>
                {stats?.map(({title, amount}) => <InfoBoxComponent
                    title={title.toUpperCase()}
                    key={title}
                    count={amount}/>)
                }
            </div>

            {/*Table*/}
            {courses?.length && <TableGrid courses={courses}/>}
        </main>
    );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
