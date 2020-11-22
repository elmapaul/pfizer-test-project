import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Jumbotron from "./JumbotronComponent";
import InfoBoxComponent from "./InfoBoxComponent";
import TableGrid from "./TableGrid";

const useStyles = makeStyles({
    main: {
        minHeight: "100vh"
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: "2em"
    }
});

const Main = () => {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <Jumbotron/>
            <div className={classes.boxContainer}>
                <InfoBoxComponent text="STUDENTS" count="55"/>
                <InfoBoxComponent text="STUDENTS" count="55"/>
                <InfoBoxComponent text="STUDENTS" count="55"/>
                <InfoBoxComponent text="STUDENTS" count="55"/>
            </div>
            <TableGrid/>
        </main>
    );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
