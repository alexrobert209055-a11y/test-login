import { useEffect, useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import TestraEmail from './components/Form/TestraEmail';
import TestraPassword from './components/Form/TestraPassword';
import TestraCode from './components/Form/TestraCode';
// import axios from 'axios';

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
          code: "",
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
      case "code":
        if (!value.trim() || value.length < 6) {
          error = "6 digit code is required";
        }
        break;
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

  const handleSubmit = () => {
    if (isStepValid()) {
      setIsSubmitting(true);

      
      // useEffect(() => {
        
      //   const token = 'YOUR_BEARER_TOKEN';

      //   const fetchData = async () => {
      //     try {
      //       // Replace with your actual API endpoint
      //         axios.get('https://api.example.com/user', {
      //           headers: {
      //             'X-API-Key': '123',
      //             'Accept': 'application/json',
      //             'Authorization': `Bearer ${token}`,
      //           }
      //         })
      //         .then(response => console.log(response.data));
      //       // ...

      //       // For axios.post(), axios.put(), or axios.patch(): The config object is the third argument (after the URL and data body).
                          
      //         const data = { name: 'Lee', role: 'admin' };

      //         axios.post('https://api.example.com/users', data, {
      //           headers: {
      //             'Content-Type': 'application/json',
      //             'X-Client': 'demo'
      //           }
      //         })
      //         .then(response => console.log(response.data));

      //     } catch (err) {
      //       // ...
      //     } finally {
      //       // ...
      //     }
      //   };

      //   fetchData();
      // }, []);

      // Simulate API call
      
      
      setTimeout(() => {

        // Reset form fields and clear localStorage
        setFormData({
          email: "",
          code: "",
          password: "",
        });
        localStorage.removeItem(STORAGE_KEY);

        // Reset current step to the beginning
        setCurrentStep(0);
        setErrors({});

        setIsSubmitting(false);
      }, 1000);
    } else {
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <TestraEmail
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBlur={handleBlur}
            errors={errors}
          />
        );
      case 1:
        return (
          <TestraPassword
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
            handleBlur={handleBlur}
            errors={errors}
          />
        );
      case 2:
        return (
          <TestraCode
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleSubmit}
            loading={isSubmitting}
            handleBlur={handleBlur}
            errors={errors}
          />
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
