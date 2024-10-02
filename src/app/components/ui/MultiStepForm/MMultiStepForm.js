import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiUpload } from 'react-icons/fi';
import { MSchedule } from '@/app/components/ui/Schedule/MSchedule';
import styles from './MMultiStepForm.module.css';
import { MButton } from '../Button/MButton';

const steps = ["Staff Information", "Upload Picture", "Set Schedule"];

export function MMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (currentStep === steps.length - 1) {
      // Final form submission
      console.log("Form Submitted", data);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className={styles['container']}>
      {/* Progress Sidebar */}
      <div className={styles['sidebar']}>
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={currentStep === index ? styles.active : currentStep > index ? styles.complete : ''}>
              <div className={styles['step-number']}>{index + 1}</div>
              <div className={styles['step-title']}>{step}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Step Content */}
      <div className={styles['step-content']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <div className={styles['step-body']}>

              {/* Personal Information */}
              <div className={styles['form-section']}>
                <h3>Personal Information</h3>
                <div className={styles['form-grid']}>
                  <div className={styles['form-group']}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Name" {...register("name", { required: "Name is required" })} />
                    {errors.name && <span className={styles['error']}>{errors.name.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" {...register("firstName", { required: "First name is required" })} />
                    {errors.firstName && <span className={styles['error']}>{errors.firstName.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Birthdate</label>
                    <input type="date" {...register("birthDate", { required: "Birthdate is required" })} />
                    {errors.birthDate && <span className={styles['error']}>{errors.birthDate.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Gender</label>
                    <select {...register("gender", { required: "Gender is required" })}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <span className={styles['error']}>{errors.gender.message}</span>}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className={styles['form-section']}>
                <h3>Contact Information</h3>
                <div className={styles['form-grid']}>
                  <div className={styles['form-group']}>
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter Phone Number" {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Enter a valid phone number" }
                    })} />
                    {errors.phoneNumber && <span className={styles['error']}>{errors.phoneNumber.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email" {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" }
                    })} />
                    {errors.email && <span className={styles['error']}>{errors.email.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>ID Card Number</label>
                    <input type="text" placeholder="Enter ID Card Number" {...register("idCard", { required: "ID card number is required" })} />
                    {errors.idCard && <span className={styles['error']}>{errors.idCard.message}</span>}
                  </div>
                </div>{styles['error']}
              </div>

              {/* Job Information */}
              <div className={styles['form-section']}>
                <h3>Job Information</h3>
                <div className={styles['form-grid']}> 
                  <div className={styles['form-group']}>
                    <label>Role</label>
                    <select {...register("role", { required: "Role is required" })}>
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                    </select>
                    {errors.role && <span className={styles['error']}>{errors.role.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Venue</label>
                    <select {...register("venue", { required: "Venue is required" })}>
                      <option value="">Select Venue</option>
                      <option value="Venue 1">Venue 1</option>
                      <option value="Venue 2">Venue 2</option>
                      <option value="Venue 3">Venue 3</option>
                    </select>
                    {errors.venue && <span className={styles['error']}>{errors.venue.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Marital Status</label>
                    <select {...register("maritalStatus", { required: "Marital status is required" })}>
                      <option value="">Select Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                    {errors.maritalStatus && <span className={styles['error']}>{errors.maritalStatus.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Nationality</label>
                    <input type="text" placeholder="Enter Nationality" {...register("nationality", { required: "Nationality is required" })} />
                    {errors.nationality && <span className={styles['error']}>{errors.nationality.message}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <label>Login Access</label>
                    <label className={styles['toggle']}>
                      <input type="checkbox" {...register("loginAccess")} />
                      <span className={styles['slider']}></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className={styles['step-body']}>
              <h2>Upload Picture</h2>
              <div className={styles['upload-area']}>
                <input type="file" {...register("picture", { required: "Picture is required" })} />
                {errors.picture && <span className={styles['error']}>{errors.picture.message}</span>}
                <div className={styles['drag-drop-area']}>
                  <FiUpload />
                  <p>Drag & drop a file or click to select</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className={styles['step-body']}>
              <h2>Set Schedule Time</h2>
              <div className={styles['form-group']}>
                <MSchedule />
              </div>
            </div>
          )}

          <div className={styles['buttons']}>
            <MButton type="button" disabled={currentStep === 0} onClick={prevStep}>
              Previous
            </MButton>
            <MButton>{currentStep === steps.length - 1 ? "Submit" : "Next"}</MButton>
          </div>
        </form>
      </div>

     
    </div>
  );
}
