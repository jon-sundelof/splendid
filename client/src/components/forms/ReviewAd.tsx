import React from 'react';
import TargetedAd from '../ads/TargetedAd';

import { connect } from 'react-redux';
import { postAd } from '../../actions/ads';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ReviewAd = ({
  handleNext,
  handleBack,
  activeStep,
  steps,
  postAd,
  values,
}: any) => {
  const publishAd = () => {
    postAd(values);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <TargetedAd reviwAdpage={true} />
        </div>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}
        <Button variant='contained' onClick={publishAd} sx={{ mt: 3, ml: 1 }}>
          {/* {activeStep === steps.length - 1 ? 'Place order' : 'Next'} */}
          Publish
        </Button>
      </Box>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  values: state.targetedAd.ad,
});

export default connect(mapStateToProps, { postAd })(ReviewAd);
