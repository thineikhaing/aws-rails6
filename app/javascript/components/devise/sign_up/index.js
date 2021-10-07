import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CommuteIcon from '@material-ui/icons/Commute';

import { Container, LoginForm } from './style';

export default function SignIn(){
  return(
    <Container>
      <Card className="card">
        <CardContent>
          <CommuteIcon className="commute-icon" />
          <Typography variant="h5" component="h2">Clock Event App</Typography>
          <Typography component="p">Create your account</Typography>
          <LoginForm>
            <TextField name="user[name]" label="Name" />
            <TextField type="email" name="user[email]" label="Email" />
            <TextField type="password" name="user[password]" label="Password" />
            <TextField type="password" name="user[password_confirmation]" label="Password Confirmation" />
            <div className="button-group">
              <Button variant="contained" href="/users/sign_in" color="primary">
                Log In
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </LoginForm>
        </CardContent>
      </Card>
    </Container>
  )
}