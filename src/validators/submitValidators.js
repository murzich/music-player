import { SubmissionError } from 'redux-form';

const throwingSubmitFn = (error, errDescription) => {
  const errorText = error.response.data.error;
  const fieldName = (errorText.toLowerCase().includes('mail')) ?
    'email' : 'password';
  throw new SubmissionError({
    [fieldName]: errorText,
    _error: errDescription,
  });
};

export default throwingSubmitFn;
