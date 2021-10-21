import * as React from 'react';

import CategoriesList from '../list/CategoriesList';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

interface State {
  dayPrice: string;
  threeDayPrice: string;
  weekPrice: string;
  productValue: string;
}

const PublishAdForm = () => {
  const [values, setValues] = React.useState<State>({
    dayPrice: '',
    threeDayPrice: '',
    weekPrice: '',
    productValue: '',
  });
  const Input = styled('input')({
    display: 'none',
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <label>1. Pick a category</label>
          <CategoriesList />
        </Grid>
        <Grid item xs={12} sm={6}>
          <label>3. Describe your product</label>
          <TextField
            required
            id='title'
            name='title'
            label='Title'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-multiline-static'
            label='Description'
            multiline
            rows={4}
            fullWidth
            style={{ marginTop: '1em' }}
          />
        </Grid>
        <Grid item xs={12}>
          <label>4. Upload image</label>
          <label htmlFor='icon-button-file'>
            <Input accept='image/*' id='icon-button-file' type='file' />
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <label
          style={{ width: '100%', padding: '2em 24px 0 24px' }}
          className='section_label'
        >
          5. Set prices
        </label>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='outlined-adornment-amount'>Day</InputLabel>
            <OutlinedInput
              size='small'
              id='outlined-adornment-amount'
              value={values.dayPrice}
              onChange={handleChange('dayPrice')}
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
              label='Amount'
              type='number'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='outlined-adornment-amount'>3 Days</InputLabel>
            <OutlinedInput
              size='small'
              id='outlined-adornment-amount'
              value={values.threeDayPrice}
              onChange={handleChange('threeDayPrice')}
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
              label='Amount'
              type='number'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='outlined-adornment-amount'>Week</InputLabel>
            <OutlinedInput
              size='small'
              id='outlined-adornment-amount'
              value={values.weekPrice}
              onChange={handleChange('weekPrice')}
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
              label='Amount'
              type='number'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <label>6. Alternatives for pickup</label>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='Pickup'
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='Delivery'
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <label>7. Cancellation policy</label>
            <TextField id='standard-basic' label='Policy' variant='standard' />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <span className='section_label'>8. The value of the product</span>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
            <OutlinedInput
              size='small'
              id='outlined-adornment-amount'
              value={values.productValue}
              onChange={handleChange('productValue')}
              startAdornment={
                <InputAdornment position='start'>$</InputAdornment>
              }
              label='Amount'
              type='number'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox color='primary' name='iAgree' value='yes' />}
            label='I agree to the terms of service'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PublishAdForm;
