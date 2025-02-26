import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addApplication, editApplication } from '../Redux/Slice/applicationSlice'

// Validation
import * as Yup from 'yup';

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
  // console.log(existingApplication);

  const [application, setApplication] = useState(typeof existingApplication === "undefined" ? initialState : existingApplication);
  // console.log(application);


  const randId = crypto.randomUUID();

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  // validation using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid Phone No.")
      .required("Phone No. is required"),
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  }

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
    try {
      await validationSchema.validate(application, { abortEarly: false });
      setErrors({});
      if (step1) {
        setStep1(false);
        setStep2(true);
      }
      else if (step2) {
        setStep2(false);
        setStep3(true);
      }
      console.log(application);
    }
    catch (error) {
      const validationErrors = {};
      if (error.inner) {
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message
        })
      }
      setErrors(validationErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (step3) {
      setStep3(false);
      setStep1(true);
    }
    console.log(application);

    if (application.id) {
      dispatch(editApplication(application));
      navigate(`/applications/${application.id}`);
    }
    else {
      dispatch(addApplication({ ...application, id: randId }));
      navigate(`/applications/${randId}`);
    }

  }

  return (

    <div className='form-container'>
      {step1 && <div className='step'>
        <h1>Personal Information:</h1>
        <form className='form'>
          <div>
            <label>Name:</label>
            <input type='text' name="name" value={application.name} onChange={handleChange} placeholder='Enter name' />
            {errors.name && <span style={{color:'red', fontSize:"12px"}}>{errors.name}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input type='email' name="email" value={application.email} onChange={handleChange} placeholder='Enter an email id' />
            {errors.email && <span style={{color:'red', fontSize:"12px"}}>{errors.email}</span>}
          </div>
          <div>
            <label>Phone:</label>
            <input type='number' name="phone" value={application.phone} onChange={handleChange} placeholder='Enter a phone number' />
            {errors.phone && <span style={{color:'red', fontSize:"12px"}}>{errors.phone}</span>}
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
            <input type='number' name="experience" value={application.experience} onChange={handleChange} placeholder='Enter name' min={0}/>
          </div>
          <div>
            <label>Skills:</label>
            <textarea name="skills" value={application.skills} onChange={handleChange} placeholder='Enter skills seperated by comma' />
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
              application.file ? <input type='text' name="file" value={application.file} readOnly /> :
                <input type='file' name="file" value={application.file} onChange={handleChange} />
            }

          </div>
          <div>
            <label>Preferred Start Date.:</label>
            <input type='date' name="startDate" value={application.startDate} onChange={handleChange} placeholder='Enter an email id' />
          </div>

          <div className='actions'>
            <button type='submit' style={{ backgroundColor: "green", border:'none' }} onClick={handleSubmit}>Submit</button>
            <button onClick={handleBack}>Back</button>
          </div>

        </form>
      </div>
      }
    </div>

  )
}

export default ApplicationForm