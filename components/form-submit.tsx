"use client"
import React, { Fragment } from "react";
import {useFormStatus} from 'react-dom';
const FormSubmit = () => {
  const {pending} = useFormStatus();
  if(pending)
    return <p>Creating post...</p>
  return (
    <Fragment>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </Fragment>
  );
};

export default FormSubmit;
 