import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function SkillsForm_user() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="Linkedin"
            fullWidth
            autoComplete="linkedin"
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="website"
            name="website"
            label="Website"
            fullWidth
            autoComplete="website"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}