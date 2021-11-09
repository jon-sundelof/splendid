import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTargetedAd } from '../actions/ads';
import { connect } from 'react-redux';

import SmallAdCard from '../components/ads/SmallAdCard';
import '../styles/RentAdPage.scss';

import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DateRange } from '@mui/lab/DateRangePicker';
import Button from '@mui/material/Button';

const RentAdPage = ({ getTargetedAd, ad }: any) => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const param: any = useParams();
  const history: any = useHistory();

  useEffect(() => {
    let id = param.id;
    getTargetedAd(id);
    console.log(param);
  }, [getTargetedAd]);

  const handleSendRequest = () => {
    // history.push(`/request/confirmed/${param}`);
    alert('Request sent to user. Await confirmation to book and pay!');
    history.push(`/`);
  };

  const calcPrice = () => {
    if (!ad || !value[0] || !value[1]) return;
    let day = ad.price[0];
    let three = ad.price[1];
    let week = ad.price[2];
    /*     let startDate: any = ;
    let finishDate: any = value[1].toString().slice(8, 10); */
    let S = parseInt(value[0].toString().slice(8, 10));
    let F = parseInt(value[1].toString().slice(8, 10));
    let days = 0;

    while (S !== F) {
      if (S === 31) {
        S = 0;
      }
      days++;
      S++;
    }

    days++;
    if (days < 3) {
      days = days * day;
    } else if (days > 2 && days < 7) {
      days = (days * three) / 3;
    } else if (days > 6) {
      days = (days * week) / 7;
    }
    return days.toFixed(0);
  };

  return (
    <main className='rent_ad_page'>
      <h2>rental period</h2>
      <SmallAdCard ad={ad} />
      <section className='calender_section_container'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            displayStaticWrapperAs='mobile'
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </section>
      <section>
        <span>Price {calcPrice()} $</span>
      </section>
      <Button
        className='send_req_btn'
        variant='contained'
        onClick={handleSendRequest}
      >
        Send Request
      </Button>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  ad: state.targetedAd.ad,
});

export default connect(mapStateToProps, { getTargetedAd })(RentAdPage);
