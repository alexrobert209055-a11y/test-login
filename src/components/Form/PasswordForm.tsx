import Button from "../UI/Button";

import logo from "../../assets/logo.png";
import PasswordInput from "../UI/PasswordInput";


const PasswordForm = ({ formData, handleInputChange, errors, handleNext, handleBlur, handleBack }) => {


  return (
    <div className="min-h-screen flex-col flex-1 bg-red-500 flex items-center justify-center bg-gradient-to-br from-blue-100 to-black-100">
      <div className="bg-gray-800 rounded-xl shadow-xl w-sm md:w-lg p-8">

        <div className="flex justify-between">
          <Button
            onClick={handleBack}
              disabled={false}
            className="transition-colors"
          >          
            {/* <img src={arrow} className="text-white w-8 h-8" alt="company logo" /> */}
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor text-red-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </Button>
          <img src={logo} alt="company logo" />
          <div></div>
        </div>

        <div className="flex align-center justify-center pb-6 px-1 pt-2">
          <p className="text-sm font-semibold text-gray-300 text-center border rounded-lg border-gray-300 px-1">{formData.email}</p>
        </div>

        <div className="flex align-center justify-center pb-6 px-1 pt-1">
          <h1 className="text-xl text-white font-black text-center">Enter your password</h1>
        </div>

        <PasswordInput
          // label="Email"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          error={errors.password}
          onBlur={handleBlur}
          className="border-2 placeholder:text-gray-600 text-white"
        />

        <div className="flex justify-end py-4">
          
            <Button
              onClick={handleNext}
              disabled={errors.email}
              className="bg-blue-500 px-10 py-1 text-sm text-white hover:bg-blue-600 transition-colors w-full"
            >
              Next
            </Button>
        </div>

      </div>

      {/* <div className="flex flex-col mt-8 items-center justify-center"> */}
      <div className="flex flex-col text-gray-300 items-center justify-center fixed bottom-6">
        <div className="flex">
          <p className="text-sm mr-3">Help and feedback</p>
          <p className="text-sm mr-3">Terms of use</p>
          <p className="text-sm">Privacy & cookies</p>
        </div>

        <div className="flex">
          <p className="text-sm mr-3">Use private browsing if this is not your device.</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
