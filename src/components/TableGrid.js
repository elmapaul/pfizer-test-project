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

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});

export default function BasicTable({rows}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <div style={{width: "100%", backgroundColor: "#f7f7f7"}}>
                <TableRow>
                    <TableCell>LAST 5 COURSES</TableCell>
                </TableRow>
            </div>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Bookable</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows && rows.map((row) => (*/}
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                <InfoIcon />
                            </TableCell>
                            <TableCell align="right">
                                <CheckIcon/>
                            </TableCell>
                            <TableCell align="right">

                            </TableCell>

                            <TableCell align="right">

                            </TableCell>

                            <TableCell align="right">
                                <Button variant="contained" color="primary">
                                    Primary
                                </Button>
                            </TableCell>
                        </TableRow>
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
