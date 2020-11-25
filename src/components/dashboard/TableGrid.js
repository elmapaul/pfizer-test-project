import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import {Link} from "react-router-dom";
import { COURSE_BASE_PATH, COURSES_ALL } from "./../../shared/routes";

const useStyles = makeStyles({
    tableDiv: {
        width: "100%",
        backgroundColor: "#f7f7f7"
    },
    tableFooter: {
        display: "flex",
        justifyContent: "flex-end",
        padding: '2em 0'
    }
});

export default function BasicTable({courses}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{marginBottom: '2em'}}>
            <div className={classes.tableDiv}>
                <TableRow>
                    <TableCell><b>LAST 5 COURSES</b></TableCell>
                </TableRow>
            </div>

            {/*Table Content*/}
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Bookable</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {courses && courses?.slice(-5)?.map(({id, title, price, dates, open}) => (
                        <TableRow key={id}>
                            <TableCell component="th">
                                <InfoIcon style={{color: 'gray', marginRight: '2em'}} /> {title}
                            </TableCell>

                            <TableCell align="center">
                                {open && <CheckIcon/>}
                            </TableCell>

                            <TableCell align="center">
                                {price?.normal}
                            </TableCell>

                            <TableCell align="center">
                                {dates?.start_date} - {dates?.end_date}
                            </TableCell>

                            <TableCell align="center">
                                <Link to={`${COURSE_BASE_PATH}/${id}`} style={{textDecoration: "none"}}>
                                    <Button variant="contained" color="secondary">
                                        View Details
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/*Footer*/}
            <div className={clsx(classes.tableDiv, classes.tableFooter)}>
                <Link to={COURSES_ALL} style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary" size="large" style={{marginRight: '2em'}}>
                        View All
                    </Button>
                </Link>
            </div>
        </TableContainer>
    );
}
