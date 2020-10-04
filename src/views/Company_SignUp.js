import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios'

const Typ = withStyles({
  root: {
    color: "#000000"
  }
})(Typography);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Website name
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

//const steps = ['Personal Info', 'Experience', 'Skills'];

//function getStepContent(step) {}

export default function CompanySignUp() {

  const [companyName, setCompanyName] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [website, setWebsite] = useState('')
  const [description, setDescription] = useState('')
  const [category1, setCategory1] = useState('')
  const [category2, setCategory2] = useState('')
  const [category3, setCategory3] = useState('')
  
  const sendSignUp = async (e) => {
  if (true){
    const res = await axios.post('http://18.221.248.111:9090/api/company/create', {
      companyName: companyName,
      companySize: companySize,
      email: email,
      password: password,
      location: city,
      websiteUrl: website,
      description: description,
      category1: category1,
      category2: category2,
      category3: category3,
      },
      {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
    })

    console.log(res.data)
  }

}



  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    sendSignUp();

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company Sign Up Process
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
              <React.Fragment>
                
              </React.Fragment>
              
              <React.Fragment>
                {<React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Company Name"
            fullWidth
            autoComplete="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companySize"
            name="companySize"
            label="Company Size"
            fullWidth
            autoComplete="companySize"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="description" label="Company Description" fullWidth autoComplete="description" />
        </Grid>
      </Grid>
      <br></br>
      <Grid item xs={12}>
          <TextField
            required
            id="website"
            name="website"
            label="Website"
            fullWidth
            autoComplete="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Grid>
      <br></br>
      <br></br>
      <Typ variant="h6" gutterBottom>
        Skills
      </Typ>
        
                <br></br>

        
        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Category 1" value="20" select value={category1} onChange={(e) => setCategory1(e.target.value)} style={{minWidth: 130}}>
          <MenuItem value="1">Education</MenuItem>
          <MenuItem value="2">Accomodation</MenuItem>
          <MenuItem value="3">Food</MenuItem>
          <MenuItem value="4">Finance</MenuItem>
          <MenuItem value="5">Health</MenuItem>
          <MenuItem value="6">Real Estate</MenuItem>
          <MenuItem value="7">Retail</MenuItem>
          <MenuItem value="8">Arts & Recreation</MenuItem>
          <MenuItem value="9">Sports</MenuItem>
          <MenuItem value="10">Construction</MenuItem>
          <MenuItem value="11">Business Administration</MenuItem>
          <MenuItem value="12">Travel</MenuItem>
          <MenuItem value="13">Data</MenuItem>
          <MenuItem value="14">Transportation</MenuItem>
        </TextField>
        </Grid>
<br></br>
        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Category 2" value="20" select value={category2} onChange={(e) => setCategory2(e.target.value)} style={{minWidth: 130}}>
          <MenuItem value="1">Education</MenuItem>
          <MenuItem value="2">Accomodation</MenuItem>
          <MenuItem value="3">Food</MenuItem>
          <MenuItem value="4">Finance</MenuItem>
          <MenuItem value="5">Health</MenuItem>
          <MenuItem value="6">Real Estate</MenuItem>
          <MenuItem value="7">Retail</MenuItem>
          <MenuItem value="8">Arts & Recreation</MenuItem>
          <MenuItem value="9">Sports</MenuItem>
          <MenuItem value="10">Construction</MenuItem>
          <MenuItem value="11">Business Administration</MenuItem>
          <MenuItem value="12">Travel</MenuItem>
          <MenuItem value="13">Data</MenuItem>
          <MenuItem value="14">Transportation</MenuItem>
        </TextField>
        </Grid>
        <br></br>
        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Category 3" value="20" select value={category3} onChange={(e) => setCategory3(e.target.value)} style={{minWidth: 130}}>
          <MenuItem value="1">Education</MenuItem>
          <MenuItem value="2">Accomodation</MenuItem>
          <MenuItem value="3">Food</MenuItem>
          <MenuItem value="4">Finance</MenuItem>
          <MenuItem value="5">Health</MenuItem>
          <MenuItem value="6">Real Estate</MenuItem>
          <MenuItem value="7">Retail</MenuItem>
          <MenuItem value="8">Arts & Recreation</MenuItem>
          <MenuItem value="9">Sports</MenuItem>
          <MenuItem value="10">Construction</MenuItem>
          <MenuItem value="11">Business Administration</MenuItem>
          <MenuItem value="12">Travel</MenuItem>
          <MenuItem value="13">Data</MenuItem>
          <MenuItem value="14">Transportation</MenuItem>
        </TextField>
        </Grid>

    </React.Fragment>}
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Sign Up
                  </Button>
                </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}