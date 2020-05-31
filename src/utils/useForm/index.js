import {useState} from 'react';

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (type, params) => {
      return setValues({...values, [type]: params});
    },
  ];
};
