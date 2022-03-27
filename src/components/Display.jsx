import React, { useContext,useEffect } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import { UserContext } from "../context/UserProvider.jsx";
import { getData } from "../service/api.js";
const usestyle = makeStyles({
    heading:{
        fontWeight:500,
        fontSize:18
    }
});
const Display = () => {
    const classes = usestyle();
    const { display,setDisplay } = useContext(UserContext);
    useEffect(() => {
        const getUsers = async () => {
            let response = await getData("r5343");
            setDisplay(response.data.data);
        };
        getUsers();
    }, []);
    return (<>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.heading} align="center">Name</TableCell>
                        <TableCell className={classes.heading} align="center">Address</TableCell>
                        <TableCell className={classes.heading} align="center">Email&nbsp;</TableCell>
                        <TableCell className={classes.heading} align="center">JobStatus&nbsp;</TableCell>
                        <TableCell className={classes.heading} align="center">DoLiketoCode&nbsp;</TableCell>
                        <TableCell className={classes.heading} align="center">Secret&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {display.map((val) => (
                        <TableRow key={val._id}>
                            <TableCell align="center">{val.Name}</TableCell>
                            <TableCell align="center">{val.Address}</TableCell>
                            <TableCell align="center">{val.Email}</TableCell>
                            <TableCell align="center">{val.JobStatus}</TableCell>
                            <TableCell align="center">{val.DoLiketoCode}</TableCell>
                            <TableCell align="center">{val.Secret}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
};
export { Display };