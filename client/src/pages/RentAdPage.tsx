import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DateRange } from '@mui/lab/DateRangePicker';
import Button from '@mui/material/Button';

const RentAdPage = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const param: string = useParams();
  const history: any = useHistory();

  const handleSendRequest = () => {
    // history.push(`/request/confirmed/${param}`);
    alert('Request sent to user. Await confirmation to book and pay!');
    history.push(`/`);
  };

  return (
    <main>
      <h2>rental period</h2>
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
      <Button variant='contained' onClick={handleSendRequest}>
        Send Request
      </Button>
    </main>
  );
};

export default RentAdPage;
