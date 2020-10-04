import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ExperienceForm_user() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Work Experience
      </Typography>
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}