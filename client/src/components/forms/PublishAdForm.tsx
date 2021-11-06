import * as React from 'react';
import { connect } from 'react-redux';
import { saveAdData } from '../../actions/ads';

import CategoriesList from '../list/CategoriesList';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
import Button from '@mui/material/Button';
// import { Button } from '@material-ui/core';

interface State {
  category: string;
  title: string;
  desc: string;
  dayPrice: string;
  threeDayPrice: string;
  weekPrice: string;
  pic: string;
  productValue: string;
  pickup: boolean;
  addresses: [string];
  delivery: boolean;
  terms: string;
  iAgree: boolean;
}

const PublishAdForm = ({ saveAdData, handleNext }: any) => {
  // const [category, setCategory] = React.useState('');
  const [values, setValues] = React.useState<State>({
    category: '',
    title: '',
    desc: '',
    dayPrice: '',
    threeDayPrice: '',
    weekPrice: '',
    pic: '',
    productValue: '',
    pickup: false,
    addresses: [''],
    delivery: false,
    terms: '',
    iAgree: false,
  });

  const handleNextAndSaveData = () => {
    const {
      category,
      title,
      desc,
      dayPrice,
      threeDayPrice,
      weekPrice,
      productValue,
      pickup,
      addresses,
      delivery,
      terms,
    } = values;
    const valuesToSend: any = {
      category,
      title,
      desc,
      price: [dayPrice, threeDayPrice, weekPrice],
      productValue,
      pickup,
      addresses,
      delivery,
      terms,
    };
    saveAdData(valuesToSend);
    handleNext();
  };
  const Input = styled('input')({
    display: 'none',
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files![0];
    if (file.size > 55000) {
      alert('Bilden är för stor');
      setValues((prev) => ({ ...prev, picDone: false, pic: '' }));
      return;
    } else {
      setValues((prev) => ({ ...prev, picDone: true }));
      const reader = new FileReader();
      setValues((prev: any) => ({ ...prev, pic: file }));
      reader.addEventListener(
        'load',
        () => {
          setValues((prev: any) => ({ ...prev, pic: reader.result }));
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values);
    };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <label>1. Describe your product</label>
          <TextField
            required
            id='title'
            value={values.title}
            onChange={handleChange('title')}
            name='title'
            label='Title'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={4}>
          {/* <label>1. Pick a category</label> */}
          <CategoriesList values={values} setCategory={setValues} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-multiline-static'
            label='Description'
            value={values.desc}
            onChange={handleChange('desc')}
            multiline
            rows={4}
            fullWidth
            style={{ marginTop: '1em' }}
          />
        </Grid>
        <label
          style={{ width: '100%', padding: '2em 24px 0 24px' }}
          className='section_label'
        >
          3. Set prices
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
        <Grid item xs={12} sm={12}>
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
          <section>
            <h2 style={{ color: 'green' }}>Delivery</h2>
            <p>
              Sp<span style={{ color: 'green' }}>lend</span>id offers users an
              environmentally friendly delivery option to make the loan more
              accessible to those who do not have the right conditions.
              <br />
              <br />
              See how we work by following the{' '}
              <span style={{ color: 'green' }}>link</span>
            </p>
          </section>
        </Grid>
        <Grid item xs={12}>
          <label>6. Alternatives for pickup</label>
          <FormGroup>
            <FormControlLabel
              name='pickup'
              control={
                <Checkbox
                  value={values.delivery}
                  onChange={handleChangeCheckbox}
                />
              }
              label='Pickup'
            />
            <FormControlLabel
              name='delivery'
              control={
                <Checkbox
                  value={values.delivery}
                  onChange={handleChangeCheckbox}
                />
              }
              label='Delivery'
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <TextField id='standard-basic' label='Address +' variant='standard' />
        </Grid>
        <Grid item xs={12}>
          <label>2. Upload image</label>
          <label htmlFor='icon-button-file'>
            <Input
              accept='image/*'
              id='icon-button-file'
              type='file'
              onChange={(e) => onFileChange(e)}
            />
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <img src={values.pic} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <label>7. Cancellation policy</label>
            <TextField
              id='terms'
              value={values.terms}
              onChange={handleChange('terms')}
              label='Policy'
              variant='standard'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <label>8. Product value</label>
            <TextField
              id='productValue'
              value={values.productValue}
              onChange={handleChange('productValue')}
              label='Value $'
              variant='standard'
              type='number'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            name='iAgree'
            control={
              <Checkbox
                value={values.delivery}
                onChange={handleChangeCheckbox}
                color='primary'
              />
            }
            label='I agree to the terms of service'
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant='contained'
              /*       onClick={() => {
                handleNext();
                handleSaveData();
              }} */
              onClick={handleNextAndSaveData}
            >
              NEXT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default connect(null, { saveAdData })(PublishAdForm);
