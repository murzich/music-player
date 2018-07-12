export const email = (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return undefined;
};

export const required = value => (
  value || typeof value === 'number' ? undefined : 'Required'
);
export const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);
