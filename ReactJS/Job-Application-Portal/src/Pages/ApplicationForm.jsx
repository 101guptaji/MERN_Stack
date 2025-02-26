import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addApplication, editApplication } from '../Redux/Slice/applicationSlice'

// Validation
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone No. is required";
  }
  else if (!/^[6-9]\d{9}$/.test(values.phone)) {
    errors.phone = "Phone No. is invalid";
  }

  return errors;
};

import useForm from '../Hooks/useForm';

const ApplicationForm = ({ jobs }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);
  const job = jobs.find(p => p.id === id);

  const dispatch = useDispatch();

  const initialState = {
    name: "",
    email: "",
    phone: "",
    experience: 0,
    skills: "",
    file: "",
    startDate: Date(Date.now()),
    dateSubmitted: Date(Date.now()),
    jobID: job.id,
    jobTitle: job.title,
    jobCompany: job.company,
  };

  const applications = useSelector(state => state.application.applications)

  const existingApplication = applications.find(app => app.jobID === id);

  const randId = crypto.randomUUID();

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const { values, errors, handleChange, validateForm } = useForm(
    typeof existingApplication === "undefined" ? initialState : existingApplication, // Initial values
    validate // Validation function
  );

  function handleBack(e) {
    e.preventDefault();
    if (step2) {
      setStep2(false);
      setStep1(true);
    }
    else if (step3) {
      setStep3(false);
      setStep2(true);
    }
    console.log(application);
  }

  async function handleNext(e) {
    e.preventDefault();
    if (validateForm()) {
      if (step1) {
        setStep1(false);
        setStep2(true);
      }
      else if (step2) {
        setStep2(false);
        setStep3(true);
      }
      console.log(values);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (step3) {
      setStep3(false);
      setStep1(true);
    }
    console.log(values);

    if (values.id) {
      dispatch(editApplication(values));
      navigate(`/applications/${values.id}`);
    }
    else {
      dispatch(addApplication({ ...values, id: randId }));
      navigate(`/applications/${randId}`);
    }
  }

  const minDate = new Date();

  return (

    <div className='form-container'>
      {step1 && <div className='step'>
        <h1>Personal Information:</h1>
        <form className='form'>
          <div>
            <label>Name:</label>
            <input type='text' name="name" value={values.name} onChange={handleChange} placeholder='Enter name' />
            {errors.name && <span style={{ color: 'red', fontSize: "12px" }}>{errors.name}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input type='email' name="email" value={values.email} onChange={handleChange} placeholder='Enter an email id' />
            {errors.email && <span style={{ color: 'red', fontSize: "12px" }}>{errors.email}</span>}
          </div>
          <div>
            <label>Phone:</label>
            <input type='number' name="phone" value={values.phone} onChange={handleChange} placeholder='Enter a phone number' />
            {errors.phone && <span style={{ color: 'red', fontSize: "12px" }}>{errors.phone}</span>}
          </div>

          <div className='actions'>
            <button type='submit' onClick={handleNext}>Next</button>
          </div>

        </form>
      </div>
      }

      {step2 && <div className='step'>
        <h1>Experience:</h1>
        <form className='form'>
          <div>
            <label>Years of experience:</label>
            <input type='number' name="experience" value={values.experience} onChange={handleChange} placeholder='Enter name' min={0} />
          </div>
          <div>
            <label>Skills:</label>
            <textarea name="skills" value={values.skills} onChange={handleChange} placeholder='Enter skills seperated by comma' />
          </div>

          <div className='actions'>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
          </div>
        </form>
      </div>
      }

      {step3 && <div className='step'>
        <h1>Additional Information:</h1>
        <form className='form'>
          <div>
            <label>Cover Letter:</label>
            {
              values.file ? <input type='text' name="file" value={values.file} readOnly /> :
                <input type='file' name="file" value={values.file} onChange={handleChange} />
            }

          </div>
          <div>
            <label>Preferred Start Date.:</label>
            <input type='date' name="startDate" value={values.startDate} onChange={handleChange} min={minDate.toISOString().slice(0, 10)} />
          </div>

          <div className='actions'>
            <button type='submit' style={{ backgroundColor: "green", border: 'none' }} onClick={handleSubmit}>Submit</button>
            <button onClick={handleBack}>Back</button>
          </div>

        </form>
      </div>
      }
    </div>

  )
}

export default ApplicationForm