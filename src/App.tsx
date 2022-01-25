import React from 'react';
import {Button, Grid, InputAdornment, TextField} from '@material-ui/core'
import { AccountCircle, LockRounded } from '@material-ui/icons'

const App: React.FC = () => {
  return (
    <div>
      <Grid container style={{minHeight: '100vh'}}>
        <Grid item xs={12} sm={6}>
          <img src="https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
          alt="PUMA" />
        </Grid>
        <Grid
        container
        item
        xs={12}
        sm={6}
        alignItems='center'
        direction='column'
        justify='space-between'
        style={{padding: 10}}>
          <div />
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 400,
            minWidth: 300,
          }}
          >
            <Grid container justify="center">
              <img src='https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-700x394.png'
              alt='logo'
              width={200}
              />
            </Grid>
            <TextField
            label="Username"
            margin="normal"
            InputProps={{ startAdornment: <InputAdornment position='start'><AccountCircle /></InputAdornment> }} />

            <TextField
            type='password'
            label="Password"
            margin="normal"
            InputProps={{ startAdornment: <InputAdornment position='start'><LockRounded /></InputAdornment> }} />
            <div style={{ height: 20}} />
            <Button color='primary' variant='contained'>
              Log in
            </Button>
            <div style={{ height: 20}} />
            <Button>
              Interested in joining?
            </Button>
          </div>
          <Grid container justify='center' spacing={2}>
            <Grid item>
              <Button color='primary'>Go to community page</Button>
            </Grid>
            <Grid item>
              <Button>Forgot password?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
