import React, { useContext } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { UserContext } from "../context/UserProvider.jsx";
const Display = () => {
    const { display } = useContext(UserContext);
    console.log(display);
    return (<>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Email&nbsp;</TableCell>
                        <TableCell align="center">JobStatus&nbsp;</TableCell>
                        <TableCell align="center">DoLiketoCode&nbsp;</TableCell>
                        <TableCell align="center">Secret&nbsp;</TableCell>
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