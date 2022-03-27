import React, { useContext, useEffect, useState } from 'react';
import { Link, Box, Button, Card, CardContent, Grid, TextField, Typography, makeStyles, Select, MenuItem, Checkbox } from '@material-ui/core';
import { authenticate } from '../service/api.js';
import { getData } from '../service/api.js';
import { UserContext } from '../context/UserProvider.jsx';
const usestyle = makeStyles(theme => ({
    container: {
        marginTop: '6%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '0px',
            height: '100vh'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '12%'
        }
    },
    form: {
        maxWidth: 450,
        margin: '0px auto',
        padding: '20px 5px',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.3)',
        [theme.breakpoints.down('xs')]: {
            marginTop: '15%',
            marginBottom: '0px',
            height: '100vh',
            boxShadow: 'none'
        }
    },
    select: {
        width: '100%',
        height: 55,
        background: "#fff"
    },
}));
const Home = () => {
    const classes = usestyle();
    const [check, setCheck] = useState(false);
    const {setDisplay } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        jobstatus: '',
        interested: ''
    });
    const onInputChange = (event) => {
        const newData = { ...formData };
        newData[event.target.name] = event.target.value;
        setFormData(newData);
        console.log(formData);
    };
    const onCheck = (event) => {
        setCheck(event.target.checked);
    };
    const signupUser = async () => {
        let response = await authenticate(
            {
                Name: formData.name,
                Address: formData.address,
                Email: formData.email,
                JobStatus: formData.jobstatus,
                DoLiketoCode: check,
                Secret: "r5343"
            }
        );
        console.log(response);
    };
    useEffect(() => {
        const getUsers = async () => {
            let response = await getData("r5343");
            setDisplay(response.data.data);
        };
        getUsers();
    }, []);
    return (<>
        <Box className={classes.container}>
            <Card className={classes.form}>
                <form>
                    <CardContent>
                        <Typography gutterBottom variant='h5'>Contact Us</Typography>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={12} item>
                                <TextField value={formData.name} onChange={(event) => onInputChange(event)} label='Full Name' name='name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField value={formData.address} multiline rows={3} onChange={(event) => onInputChange(event)} type='text' name='address' label='Address' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField value={formData.email} onChange={(event) => onInputChange(event)} type='email' name='email' label='Email' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Select
                                    onChange={(event) => onInputChange(event)}
                                    label='JobStatus'
                                    name='jobstatus'
                                    className={classes.select}
                                    variant='outlined'
                                    required={true}
                                    value={formData.jobstatus}
                                >
                                    <MenuItem value={'Unemployed'}>Unemployed</MenuItem>
                                    <MenuItem value={'Working'}>Working</MenuItem>
                                    <MenuItem value={'Student'}>Student</MenuItem>
                                    <MenuItem value={'Retired'}>Retired</MenuItem>
                                </Select>
                            </Grid>
                            <Grid xs={12} item>
                                <Checkbox checked={check} color="primary" name='interested' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value={check} onChange={(event) => (onInputChange(event), onCheck(event))} />
                                <Typography variant='span'>DoLiketoCode</Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Button type='submit' variant='contained' color='primary' fullWidth onClick={() => (signupUser())} style={{ marginTop: '10px' }} >Submit</Button>
                            </Grid>
                            <Grid xs={12} item style={{ textAlign: 'center', marginTop: '15px' }}>
                                <Link href='/users' style={{ textDecoration: 'none', color: 'voilet' }}>Users</Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </form>
            </Card>
        </Box>
    </>);
};
export { Home };