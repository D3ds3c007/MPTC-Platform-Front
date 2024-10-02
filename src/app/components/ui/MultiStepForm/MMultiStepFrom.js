import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiUpload } from 'react-icons/fi';
import { MSchedule } from '@/app/components/ui/Schedule/MSchedule';

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
    <div className="container">
      {/* Progress Sidebar */}
      <div className="sidebar">
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={currentStep === index ? 'active' : currentStep > index ? 'complete' : ''}>
              <div className="step-number">{index + 1}</div>
              <div className="step-title">{step}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Step Content */}
      <div className="step-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <div className="step-body">
              <h2>Staff Information</h2>

              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Name" {...register("name", { required: "Name is required" })} />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" {...register("firstName", { required: "First name is required" })} />
                    {errors.firstName && <span className="error">{errors.firstName.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Birthdate</label>
                    <input type="date" {...register("birthDate", { required: "Birthdate is required" })} />
                    {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <select {...register("gender", { required: "Gender is required" })}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <span className="error">{errors.gender.message}</span>}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="form-section">
                <h3>Contact Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter Phone Number" {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Enter a valid phone number" }
                    })} />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Email" {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" }
                    })} />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>ID Card Number</label>
                    <input type="text" placeholder="Enter ID Card Number" {...register("idCard", { required: "ID card number is required" })} />
                    {errors.idCard && <span className="error">{errors.idCard.message}</span>}
                  </div>
                </div>
              </div>

              {/* Job Information */}
              <div className="form-section">
                <h3>Job Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Role</label>
                    <select {...register("role", { required: "Role is required" })}>
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                    </select>
                    {errors.role && <span className="error">{errors.role.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Venue</label>
                    <select {...register("venue", { required: "Venue is required" })}>
                      <option value="">Select Venue</option>
                      <option value="Venue 1">Venue 1</option>
                      <option value="Venue 2">Venue 2</option>
                      <option value="Venue 3">Venue 3</option>
                    </select>
                    {errors.venue && <span className="error">{errors.venue.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Marital Status</label>
                    <select {...register("maritalStatus", { required: "Marital status is required" })}>
                      <option value="">Select Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                    {errors.maritalStatus && <span className="error">{errors.maritalStatus.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Nationality</label>
                    <input type="text" placeholder="Enter Nationality" {...register("nationality", { required: "Nationality is required" })} />
                    {errors.nationality && <span className="error">{errors.nationality.message}</span>}
                  </div>

                  <div className="form-group">
                    <label>Login Access</label>
                    <label className="toggle">
                      <input type="checkbox" {...register("loginAccess")} />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="step-body">
              <h2>Upload Picture</h2>
              <div className="upload-area">
                <input type="file" {...register("picture", { required: "Picture is required" })} />
                {errors.picture && <span className="error">{errors.picture.message}</span>}
                <div className="drag-drop-area">
                  <FiUpload />
                  <p>Drag & drop a file or click to select</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-body">
              <h2>Set Schedule Time</h2>
              <div className="form-group">
                <MSchedule />
              </div>
            </div>
          )}

          <div className="buttons">
            <button type="button" disabled={currentStep === 0} onClick={prevStep}>
              Previous
            </button>
            <button type="submit">{currentStep === steps.length - 1 ? "Submit" : "Next"}</button>
          </div>
        </form>
      </div>

      {/* Styles */}
      <style jsx>{`
        .container {
          display: flex;
          max-width: 900px;
          margin: 20px auto;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          background-color: white;
        }

        .sidebar {
          flex-basis: 25%;
          background: #f5f5f5;
          padding: 30px 20px;
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
        }

        .sidebar ul li {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .step-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #0070f3;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        }

        .step-title {
          font-size: 16px;
        }

        .active {
          font-weight: bold;
        }

        .complete {
          color: #0070f3;
        }

        .step-content {
          flex-basis: 75%;
          padding: 30px;
        }

        .step-body {
          display: flex;
          flex-direction: column;
        }

        .form-section {
          margin-bottom: 20px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input,
        .form-group select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #0070f3;
          outline: none;
        }

        .error {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .upload-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px dashed #0070f3;
          padding: 30px;
          border-radius: 8px;
          margin-top: 20px;
        }

        .drag-drop-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        .drag-drop-area p {
          margin-top: 10px;
          font-size: 14px;
          color: #555;
        }

        .toggle {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .toggle input {
          display: none;
        }

        .slider {
          width: 34px;
          height: 20px;
          background: #ccc;
          border-radius: 34px;
          position: relative;
          transition: background 0.2s;
        }

        .slider:before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          left: 2px;
          bottom: 2px;
          background: white;
          border-radius: 50%;
          transition: transform 0.2s;
        }

        input:checked + .slider {
          background: #0070f3;
        }

        input:checked + .slider:before {
          transform: translateX(14px);
        }
      `}</style>
    </div>
  );
}
