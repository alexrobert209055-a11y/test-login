// import { useEffect, useState } from 'react';
// import './App.css';
// import PersonalForm from './components/Form/PersonalForm';
// import AddressForm from './components/Form/AddressForm';
// import ConfirmationForm from './components/Form/ConfirmationForm';
// import EmailForm from './components/Form/EmailForm';
// // import ProgressBar from './components/UI/ProgressBar';
// // import Tabs from './components/UI/Tabs';
// // import Button from './components/UI/Button';
// // import api from './config/axiosInstance';
// // import api from './config/axiosInstance';
// // import API from './config/axiosInstance';
// import { motion, AnimatePresence } from "framer-motion";
// import PasswordForm from './components/Form/PasswordForm';
// import TestraEmail from './components/Form/TestraEmail';
// import TestraPassword from './components/Form/TestraPassword';
// import TestraCode from './components/Form/TestraCode';
// // import axios from 'axios';

// const STEPS = ["Personal Information", "Address Information", "Confirmation"];
// const STORAGE_KEY = "multistepFormData";
// const STEP_KEY = "multistepFormStep";

// function App() {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [currentStep, setCurrentStep] = useState(() => {
//     const savedStep = localStorage.getItem(STEP_KEY);
//     return savedStep ? parseInt(savedStep, 10) : 0;
//   });

//   const [formData, setFormData] = useState(() => {
//     const savedData = localStorage.getItem(STORAGE_KEY);
//     return savedData
//       ? JSON.parse(savedData)
//       : {
//           email: "",
//           password: "",
//           code: "",
//         };
//   });

//   // const [formData, setFormData] = useState(() => {
//   //   const savedData = localStorage.getItem(STORAGE_KEY);
//   //   return savedData
//   //     ? JSON.parse(savedData)
//   //     : {
//   //         name: "",
//   //         email: "",
//   //         phone: "",
//   //         addressLine1: "",
//   //         addressLine2: "",
//   //         city: "",
//   //         state: "",
//   //         zipCode: "",
//   //       };
//   // });

//   const [errors, setErrors] = useState({});
  
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }, [formData]);

//   useEffect(() => {
//     localStorage.setItem(STEP_KEY, currentStep.toString());
//   }, [currentStep]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     validateField(name, value);
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     validateField(name, value);
//   };
  
//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       // case "name":
//       //   if (!value.trim()) {
//       //     error = "Name is required";
//       //   } else if (!isNaN(value)) {
//       //     error = "Name cannot be a number";
//       //   }
//       //   break;
//       case "code":
//         if (!value.trim() || value.length < 6) {
//           error = "6 digit code is required";
//         }
//         break;
//       case "email":
//         error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//           ? ""
//           : "Invalid email format";
//         break;
//       case "password":
//         if (!value.trim()) {
//           error = "password is required";
//         }
//         break;
//       // case "phone":
//       //   if (!/^\d{10}$/.test(value)) {
//       //     error = "Phone must be 10 digits";
//       //   } else if (/[^0-9]/.test(value)) {
//       //     error = "Phone can't be letters";
//       //   }
//       //   break;
//       // case "addressLine1":
//       //   if (!value.trim()) {
//       //     error = "Address Line 1 is required";
//       //   } else if (!isNaN(value)) {
//       //     error = "Address Line 1 cannot be a number";
//       //   }
//       //   break;
//       // case "addressLine2":
//       //   if (value && !isNaN(value)) {
//       //     error = "Address Line 2 cannot be a number";
//       //   }
//       //   break;
//       // case "city":
//       //   if (!value.trim()) {
//       //     error = "City is required";
//       //   } else if (!isNaN(value)) {
//       //     error = "City cannot be a number";
//       //   }
//       //   break;
//       // case "zipCode":
//       //   if (!/^\d{6}$/.test(value)) {
//       //     error = "Invalid ZIP code";
//       //   } else if (/[^0-9]/.test(value)) {
//       //     error = "ZIP code cannot be a string";
//       //   }
//       //   break;
//       default:
//         break;
//     }
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//   };

//   const isStepValid = () => {
//     // const currentFields =
//     //   currentStep === 0
//     //     ? ["name", "email", "phone"]
//     //     : ["addressLine1", "city", "state", "zipCode"];

//     const currentFields =
//       currentStep === 0
//         ? ["email"]
//         : ["password"];

//     console.log('err ', errors);

//     return currentFields.every(
//       (field) => formData[field].trim() !== "" && !errors[field]
//     );
//   };

//   const handleNext = () => {
//     if (isStepValid()) {
//       setCurrentStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = () => {
//     if (isStepValid() && !errors[code]) {
//       setIsSubmitting(true);

      
//       // useEffect(() => {
        
//       //   const token = 'YOUR_BEARER_TOKEN';

//       //   const fetchData = async () => {
//       //     try {
//       //       // Replace with your actual API endpoint
//       //         axios.get('https://api.example.com/user', {
//       //           headers: {
//       //             'X-API-Key': '123',
//       //             'Accept': 'application/json',
//       //             'Authorization': `Bearer ${token}`,
//       //           }
//       //         })
//       //         .then(response => console.log(response.data));
//       //       // ...

//       //       // For axios.post(), axios.put(), or axios.patch(): The config object is the third argument (after the URL and data body).
                          
//       //         const data = { name: 'Lee', role: 'admin' };

//       //         axios.post('https://api.example.com/users', data, {
//       //           headers: {
//       //             'Content-Type': 'application/json',
//       //             'X-Client': 'demo'
//       //           }
//       //         })
//       //         .then(response => console.log(response.data));

//       //     } catch (err) {
//       //       // ...
//       //     } finally {
//       //       // ...
//       //     }
//       //   };

//       //   fetchData();
//       // }, []);

//       // Simulate API call
      
      
//       setTimeout(() => {
//         // Once API call completes (simulated)
//         // toast.success("Form submitted successfully!");

//         // Reset form fields and clear localStorage
//         // setFormData({
//         //   name: "",
//         //   email: "",
//         //   phone: "",
//         //   addressLine1: "",
//         //   addressLine2: "",
//         //   city: "",
//         //   state: "",
//         //   zipCode: "",
//         // });

//         // Reset form fields and clear localStorage
//         setFormData({
//           email: "",
//           code: "",
//           password: "",
//         });
//         localStorage.removeItem(STORAGE_KEY);

//         // Reset current step to the beginning
//         setCurrentStep(0);
//         setErrors({});

//         setIsSubmitting(false);
//       }, 1000);
//     } else {
//       // toast.error("Please fill out all required fields correctly.");
//     }
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 0:
//         return (
//           // <PersonalForm
//           //   formData={formData}
//           //   handleInputChange={handleInputChange}
//           //   // handleBlur={handleBlur}
//           //   errors={errors}
//           // />

//           // <EmailForm
//           //   formData={formData}
//           //   handleInputChange={handleInputChange}
//           //   handleNext={handleNext}
//           //   handleBlur={handleBlur}
//           //   errors={errors}
//           // />

//           <TestraEmail
//             formData={formData}
//             handleInputChange={handleInputChange}
//             handleNext={handleNext}
//             handleBlur={handleBlur}
//             errors={errors}
//           />
//         );
//       case 1:
//         return (
//           // <AddressForm
//           //   formData={formData}
//           //   handleInputChange={handleInputChange}
//           //   // handleBlur={handleBlur}
//           //   errors={errors}
//           // />

//           // <PasswordForm
//           //   formData={formData}
//           //   handleInputChange={handleInputChange}
//           //   handleNext={handleNext}
//           //   handleBack={handleBack}
//           //   handleBlur={handleBlur}
//           //   errors={errors}
//           // />

//           <TestraPassword
//             formData={formData}
//             handleInputChange={handleInputChange}
//             handleNext={handleNext}
//             handleBack={handleBack}
//             handleBlur={handleBlur}
//             errors={errors}
//           />
//         );
//       case 2:
//         return (
//           // <ConfirmationForm formData={formData} />
//           <TestraCode
//             formData={formData}
//             handleInputChange={handleInputChange}
//             handleNext={handleSubmit}
//             loading={isSubmitting}
//             handleBlur={handleBlur}
//             errors={errors}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex-1">
//     {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100"> */}
//       {/* <div className="bg-white rounded-2xl shadow-xl w-full max-w-md"> */}
//         {/* <ProgressBar currentStep={currentStep} totalSteps={STEPS.length} /> */}
//         {/* <Tabs
//           steps={STEPS}
//           currentStep={currentStep}
//           setCurrentStep={setCurrentStep}
//         /> */}
//         {/* <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           {STEPS[currentStep]}
//         </h1> */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentStep}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             {renderStep()}
//           </motion.div>
//         </AnimatePresence>
//         {/* <div className="flex justify-between mt-8">
//           <Button
//             onClick={handleBack}
//             disabled={currentStep === 0}
//             className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
//           >
//             Back
//           </Button>
//           {currentStep === STEPS.length - 1 ? (
//             <Button
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className={`bg-green-500 text-white hover:bg-green-600 transition-colors ${
//                 isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </Button>
//           ) : (
//             <Button
//               onClick={handleNext}
//               disabled={false}
//               className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//             >
//               Next
//             </Button>
//           )}
//         </div> */}
//       {/* </div> */}
//     </div>
//   )
// }

// export default App
