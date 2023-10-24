import React, { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, getUser } from '../../State/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { auth } = useSelector(store => store);

    useEffect(() => {
        if(jwt) {
            dispatch(getUser(jwt));
        }
    }, [jwt, auth.jwt]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }

        dispatch(register(userData));

        console.log(userData);
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    required
                    id='firstName'
                    label='First Name'
                    name='firstName'
                    autoComplete='off'
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    required
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='off'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='off'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    id='password'
                    label='Password'
                    name='password'
                    autoComplete='off'
                />
            </Grid>
            <Grid item xs={12}>
                <Button type='submit' variant='contained' size='large' className='w-full' sx={{padding: '.8rem 0', bgcolor: '#9155fd'}}>Register</Button>
            </Grid>
        </Grid>
      </form>

      <div className='flex items-center justify-center py-3'>
        <p>if you already have an account </p>
        <Button onClick={() => navigate('/login')} size='small' className='ml-5'>login</Button>
      </div>
    </>
  )
}

export default RegisterForm;
