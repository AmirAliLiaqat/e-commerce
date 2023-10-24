import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    }

    dispatch(login(userData));

    console.log(userData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
                <Button type='submit' variant='contained' size='large' className='w-full' sx={{padding: '.8rem 0', bgcolor: '#9155fd'}}>Login</Button>
            </Grid>
        </Grid>
      </form>

      <div className='flex items-center justify-center py-3'>
        <p>if you don't have an account </p>
        <Button onClick={() => navigate('/register')} size='small' className='ml-5'>register</Button>
      </div>
    </>
  )
}

export default LoginForm;
