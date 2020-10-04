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

export default function Checkout() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [currentRole, setCurrentRole] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [gitHub, setGitHub] = useState('')
  const [website, setWebsite] = useState('')
  const [skill1, setSkill1] = useState('')
  const [skill2, setSkill2] = useState('')
  const [skill3, setSkill3] = useState('')
  const [category1, settCategory1] = useState('')
  const [category2, settCategory2] = useState('')
  const [category3, settCategory3] = useState('')
  
  const sendSignUp = async (e) => {
  if (true){
    const res = await axios.post('http://18.221.248.111:9090/api/userprofile/create', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      location: city,
      companyname: companyName,
      currentRole: currentRole,
      linkedInUrl: linkedIn,
      githubUrl: gitHub,
      websiteUrl: website,
      skill1: skill1,
      skill1: skill2,
      skill1: skill3,
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
            Individual Sign Up Process
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
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
      <br></br>
      <br></br>
      <Typ variant="h6" gutterBottom>
        Work Experience
      </Typ>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="companyName" label="Current Company Name" fullWidth autoComplete="companyName" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="role"
            label="Current Role"
            fullWidth
            autoComplete="role"
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField required id="companyNamePrev" label="Previous Company Name" fullWidth autoComplete="companyNamePrev" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="rolePrev"
            label="Previous Role"
            fullWidth
            autoComplete="rolePrev"
          />
        </Grid> */}
      </Grid>
      <br></br>
      <br></br>
      <Typ variant="h6" gutterBottom>
        Skills
      </Typ>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="Linkedin"
            fullWidth
            autoComplete="linkedin"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="github"
            name="github"
            label="Github"
            fullWidth
            autoComplete="github"
            value={gitHub}
            onChange={(e) => setGitHub(e.target.value)}
          />
        </Grid>
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
 

        <Grid item xs={3}>
        <TextField id="select" label="Skill 1" value="20" select value={skill1} onChange={(e) => setSkill1(e.target.value)} style={{minWidth: 130}}>
          <MenuItem value="1">Algorithms</MenuItem>
            <MenuItem value="2">Analytical Skills</MenuItem>
            <MenuItem value="3">Big Data</MenuItem>
            <MenuItem value="4">Calculating</MenuItem>
            <MenuItem value="5">Compiling Statistics</MenuItem>
            <MenuItem value="6">Data Analytics</MenuItem>
            <MenuItem value="7">Data Mining</MenuItem>
            <MenuItem value="8">Database Design</MenuItem>
            <MenuItem value="9">Database Management</MenuItem>
            <MenuItem value="10">Documentation</MenuItem>
            <MenuItem value="11">Modeling</MenuItem>
            <MenuItem value="12">Modification</MenuItem>
            <MenuItem value="13">Needs Analysis</MenuItem>
            <MenuItem value="14">Quantitative Research</MenuItem>
            <MenuItem value="15">Quantitative Reports</MenuItem>
            <MenuItem value="16">Statistical Analysis</MenuItem>
            <MenuItem value="17">Applications</MenuItem>
            <MenuItem value="18">Certifications</MenuItem>
            <MenuItem value="19">Coding</MenuItem>
            <MenuItem value="20">Computing</MenuItem>
            <MenuItem value="21">Configuration</MenuItem>
            <MenuItem value="22">Customer Support</MenuItem>
            <MenuItem value="23">Debugging</MenuItem>
            <MenuItem value="24">Design</MenuItem>
            <MenuItem value="25">Development</MenuItem>
            <MenuItem value="26">Hardware</MenuItem>
            <MenuItem value="27">HTML</MenuItem>
            <MenuItem value="28">Implementation</MenuItem>
            <MenuItem value="29">Information Technology</MenuItem>
            <MenuItem value="30">ICT (Information and Communications Technology)</MenuItem>
            <MenuItem value="31">Infrastructure</MenuItem>
            <MenuItem value="32">Languages</MenuItem>
            <MenuItem value="33">Maintenance</MenuItem>
            <MenuItem value="34">Network Architecture</MenuItem>
            <MenuItem value="35">Network Security</MenuItem>
            <MenuItem value="36">Networking</MenuItem>
            <MenuItem value="37">New Technologies</MenuItem>
            <MenuItem value="38">Operating Systems</MenuItem>
            <MenuItem value="39">Programming</MenuItem>
            <MenuItem value="40">Restoration</MenuItem>
            <MenuItem value="41">Security</MenuItem>
            <MenuItem value="42">Servers</MenuItem>
            <MenuItem value="43">Software</MenuItem>
            <MenuItem value="44">Solution Delivery</MenuItem>
            <MenuItem value="45">Storage</MenuItem>
            <MenuItem value="46">Structures</MenuItem>
            <MenuItem value="47">Systems Analysis</MenuItem>
            <MenuItem value="48">Technical Support</MenuItem>
            <MenuItem value="49">Technology</MenuItem>
            <MenuItem value="50">Testing</MenuItem>
            <MenuItem value="51">Tools</MenuItem>
            <MenuItem value="52">Training</MenuItem>
            <MenuItem value="53">Troubleshooting</MenuItem>
            <MenuItem value="54">Usability</MenuItem>
            <MenuItem value="55">Benchmarking</MenuItem>
            <MenuItem value="56">Budget Planning</MenuItem>
            <MenuItem value="57">Engineering</MenuItem>
            <MenuItem value="58">Fabrication</MenuItem>
            <MenuItem value="59">Following Specifications</MenuItem>
            <MenuItem value="60">Operations</MenuItem>
            <MenuItem value="61">Performance Review</MenuItem>
            <MenuItem value="62">Project Planning</MenuItem>
            <MenuItem value="63">Quality Assurance</MenuItem>
            <MenuItem value="64">Quality Control</MenuItem>
            <MenuItem value="65">Scheduling</MenuItem>
            <MenuItem value="66">Task Delegation</MenuItem>
            <MenuItem value="67">Task Management</MenuItem>
            </TextField>
        </Grid>

        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Skill 2" value="20" select value={skill2} onChange={(e) => setSkill2(e.target.value)} style={{minWidth: 130}}>
          <MenuItem value="1">Algorithms</MenuItem>
            <MenuItem value="2">Analytical Skills</MenuItem>
            <MenuItem value="3">Big Data</MenuItem>
            <MenuItem value="4">Calculating</MenuItem>
            <MenuItem value="5">Compiling Statistics</MenuItem>
            <MenuItem value="6">Data Analytics</MenuItem>
            <MenuItem value="7">Data Mining</MenuItem>
            <MenuItem value="8">Database Design</MenuItem>
            <MenuItem value="9">Database Management</MenuItem>
            <MenuItem value="10">Documentation</MenuItem>
            <MenuItem value="11">Modeling</MenuItem>
            <MenuItem value="12">Modification</MenuItem>
            <MenuItem value="13">Needs Analysis</MenuItem>
            <MenuItem value="14">Quantitative Research</MenuItem>
            <MenuItem value="15">Quantitative Reports</MenuItem>
            <MenuItem value="16">Statistical Analysis</MenuItem>
            <MenuItem value="17">Applications</MenuItem>
            <MenuItem value="18">Certifications</MenuItem>
            <MenuItem value="19">Coding</MenuItem>
            <MenuItem value="20">Computing</MenuItem>
            <MenuItem value="21">Configuration</MenuItem>
            <MenuItem value="22">Customer Support</MenuItem>
            <MenuItem value="23">Debugging</MenuItem>
            <MenuItem value="24">Design</MenuItem>
            <MenuItem value="25">Development</MenuItem>
            <MenuItem value="26">Hardware</MenuItem>
            <MenuItem value="27">HTML</MenuItem>
            <MenuItem value="28">Implementation</MenuItem>
            <MenuItem value="29">Information Technology</MenuItem>
            <MenuItem value="30">ICT (Information and Communications Technology)</MenuItem>
            <MenuItem value="31">Infrastructure</MenuItem>
            <MenuItem value="32">Languages</MenuItem>
            <MenuItem value="33">Maintenance</MenuItem>
            <MenuItem value="34">Network Architecture</MenuItem>
            <MenuItem value="35">Network Security</MenuItem>
            <MenuItem value="36">Networking</MenuItem>
            <MenuItem value="37">New Technologies</MenuItem>
            <MenuItem value="38">Operating Systems</MenuItem>
            <MenuItem value="39">Programming</MenuItem>
            <MenuItem value="40">Restoration</MenuItem>
            <MenuItem value="41">Security</MenuItem>
            <MenuItem value="42">Servers</MenuItem>
            <MenuItem value="43">Software</MenuItem>
            <MenuItem value="44">Solution Delivery</MenuItem>
            <MenuItem value="45">Storage</MenuItem>
            <MenuItem value="46">Structures</MenuItem>
            <MenuItem value="47">Systems Analysis</MenuItem>
            <MenuItem value="48">Technical Support</MenuItem>
            <MenuItem value="49">Technology</MenuItem>
            <MenuItem value="50">Testing</MenuItem>
            <MenuItem value="51">Tools</MenuItem>
            <MenuItem value="52">Training</MenuItem>
            <MenuItem value="53">Troubleshooting</MenuItem>
            <MenuItem value="54">Usability</MenuItem>
            <MenuItem value="55">Benchmarking</MenuItem>
            <MenuItem value="56">Budget Planning</MenuItem>
            <MenuItem value="57">Engineering</MenuItem>
            <MenuItem value="58">Fabrication</MenuItem>
            <MenuItem value="59">Following Specifications</MenuItem>
            <MenuItem value="60">Operations</MenuItem>
            <MenuItem value="61">Performance Review</MenuItem>
            <MenuItem value="62">Project Planning</MenuItem>
            <MenuItem value="63">Quality Assurance</MenuItem>
            <MenuItem value="64">Quality Control</MenuItem>
            <MenuItem value="65">Scheduling</MenuItem>
            <MenuItem value="66">Task Delegation</MenuItem>
            <MenuItem value="67">Task Management</MenuItem>
            </TextField>
        </Grid>

        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Skill 3" value="20" select value={skill3} onChange={(e) => setSkill3(e.target.value)} style={{minWidth: 130}}>
          <MenuItem value="1">Algorithms</MenuItem>
            <MenuItem value="2">Analytical Skills</MenuItem>
            <MenuItem value="3">Big Data</MenuItem>
            <MenuItem value="4">Calculating</MenuItem>
            <MenuItem value="5">Compiling Statistics</MenuItem>
            <MenuItem value="6">Data Analytics</MenuItem>
            <MenuItem value="7">Data Mining</MenuItem>
            <MenuItem value="8">Database Design</MenuItem>
            <MenuItem value="9">Database Management</MenuItem>
            <MenuItem value="10">Documentation</MenuItem>
            <MenuItem value="11">Modeling</MenuItem>
            <MenuItem value="12">Modification</MenuItem>
            <MenuItem value="13">Needs Analysis</MenuItem>
            <MenuItem value="14">Quantitative Research</MenuItem>
            <MenuItem value="15">Quantitative Reports</MenuItem>
            <MenuItem value="16">Statistical Analysis</MenuItem>
            <MenuItem value="17">Applications</MenuItem>
            <MenuItem value="18">Certifications</MenuItem>
            <MenuItem value="19">Coding</MenuItem>
            <MenuItem value="20">Computing</MenuItem>
            <MenuItem value="21">Configuration</MenuItem>
            <MenuItem value="22">Customer Support</MenuItem>
            <MenuItem value="23">Debugging</MenuItem>
            <MenuItem value="24">Design</MenuItem>
            <MenuItem value="25">Development</MenuItem>
            <MenuItem value="26">Hardware</MenuItem>
            <MenuItem value="27">HTML</MenuItem>
            <MenuItem value="28">Implementation</MenuItem>
            <MenuItem value="29">Information Technology</MenuItem>
            <MenuItem value="30">ICT (Information and Communications Technology)</MenuItem>
            <MenuItem value="31">Infrastructure</MenuItem>
            <MenuItem value="32">Languages</MenuItem>
            <MenuItem value="33">Maintenance</MenuItem>
            <MenuItem value="34">Network Architecture</MenuItem>
            <MenuItem value="35">Network Security</MenuItem>
            <MenuItem value="36">Networking</MenuItem>
            <MenuItem value="37">New Technologies</MenuItem>
            <MenuItem value="38">Operating Systems</MenuItem>
            <MenuItem value="39">Programming</MenuItem>
            <MenuItem value="40">Restoration</MenuItem>
            <MenuItem value="41">Security</MenuItem>
            <MenuItem value="42">Servers</MenuItem>
            <MenuItem value="43">Software</MenuItem>
            <MenuItem value="44">Solution Delivery</MenuItem>
            <MenuItem value="45">Storage</MenuItem>
            <MenuItem value="46">Structures</MenuItem>
            <MenuItem value="47">Systems Analysis</MenuItem>
            <MenuItem value="48">Technical Support</MenuItem>
            <MenuItem value="49">Technology</MenuItem>
            <MenuItem value="50">Testing</MenuItem>
            <MenuItem value="51">Tools</MenuItem>
            <MenuItem value="52">Training</MenuItem>
            <MenuItem value="53">Troubleshooting</MenuItem>
            <MenuItem value="54">Usability</MenuItem>
            <MenuItem value="55">Benchmarking</MenuItem>
            <MenuItem value="56">Budget Planning</MenuItem>
            <MenuItem value="57">Engineering</MenuItem>
            <MenuItem value="58">Fabrication</MenuItem>
            <MenuItem value="59">Following Specifications</MenuItem>
            <MenuItem value="60">Operations</MenuItem>
            <MenuItem value="61">Performance Review</MenuItem>
            <MenuItem value="62">Project Planning</MenuItem>
            <MenuItem value="63">Quality Assurance</MenuItem>
            <MenuItem value="64">Quality Control</MenuItem>
            <MenuItem value="65">Scheduling</MenuItem>
            <MenuItem value="66">Task Delegation</MenuItem>
            <MenuItem value="67">Task Management</MenuItem>
            </TextField>
        </Grid>

        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Category 1" value="20" select value={category1} onChange={(e) => settCategory1(e.target.value)} style={{minWidth: 130}}>
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

        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Category 2" value="20" select value={category2} onChange={(e) => settCategory2(e.target.value)} style={{minWidth: 130}}>
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
        
        <Grid container spacing={3}></Grid>

        <Grid item xs={3}>
        <TextField id="select" label="Category 3" value="20" select value={category3} onChange={(e) => settCategory3(e.target.value)} style={{minWidth: 130}}>
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