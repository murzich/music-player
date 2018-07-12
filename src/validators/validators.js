export const email = (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return undefined;
};

export const required = value => (
  value || typeof value === 'number' ? undefined : 'Required'
);

// DO NOT pass the HoF straight into a validation prop of the Field component,
// because a rendering loop error will occur.
const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);

export const minLength6 = minLength(6);

const equalTo = comparableName => (value, allValues) => (
  value !== allValues[comparableName] ? `Must be equal to ${comparableName} field` : undefined
);

export const equalToPassword = equalTo('password');
