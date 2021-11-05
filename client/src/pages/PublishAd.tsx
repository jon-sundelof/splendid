import * as React from 'react';

/* SCSS */
import '../styles/publishad.scss';
/* **************************** */

/* Components import */
import PublishAdForm from '../components/forms/PublishAdForm';
import ReviewAd from '../components/forms/ReviewAd';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Typography from '@mui/material/Typography';

const PublishAd = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ['Product info', 'Review your ad'];

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <PublishAdForm handleNext={handleNext} />;
      case 1:
        return (
          <ReviewAd
            handleBack={handleBack}
            handleNext={handleNext}
            // activeStep={activeStep}
            steps={steps}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <main className='main_container_publish'>
      <Container component='main' maxWidth='md' sx={{ mb: 4 }}>
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component='h1' variant='h4' align='center'>
            Publish Ad
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)}
              {/*       <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box> */}
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </main>
  );
};

export default PublishAd;
