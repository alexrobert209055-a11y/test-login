import Button from "../UI/Button";
import Input from "../UI/Input";

import logo from "../../assets/telstra.png";


const TestraEmail = ({ formData, handleInputChange, errors, handleNext, handleBlur }) => {
  return (
    <div className="min-h-screen flex-1 bg-white flex items-center justify-center">

      <div className="flex fixed top-0 left-0 border-b shadow-xl border border-gray-300 w-full">          
        <div className="flex  md:ml-24 ml-12 mt-2 py-2">
          <img src={logo} className="w-12 h-12" alt="company logo" />
        </div>
      </div>

      <div className="w-sm md:w-lg px-8 -mt-1">

        <div className="flex flex-col pb-12 md:mt-4 mt-8">
          <h1 className="text-2xl font-semibold text-left">Sign in</h1>
          <p className="text-sm font-medium pt-4">Sign in with your telstra id</p>
        </div>

        <Input
          label="Username"
          name="email"
          type="text"
          value={formData.email}
          placeholder="Email, phone, or Skype"
          onChange={handleInputChange}
          error={errors.email}
          onBlur={handleBlur}
          className="border-2"
        />

        <div className="flex flex-col">

          <p className="text-sm pt-2 pb-2"><a href="#" className="text-blue-600 underline font-bold" target="_blank">Recover username</a></p>

          <div className="flex mt-4 items-start justify-start">            
            <input
              type='checkbox'
              id='rem'
              name='checkbox'
              value={''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-5 h-5 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300`}
            />
            <p className="text-sm ml-4">Remember Username</p>
          </div>
        </div>

        {/* <div className="flex flex-col">
          <p className="text-sm pt-2">No account? <a href="#" className="text-blue-600" target="_blank">create one!</a></p>
          <p className="text-sm py-2"><a href="#" className="text-blue-600" target="_blank">can't access your account?</a></p>
        </div> */}

        <div className="flex flex-col justify-end py-4 mt-4">
          
            <Button
              onClick={handleNext}
              disabled={errors.email}
              className="bg-blue-500 rounded-2xl mt-2 px-10 py-2 text-sm text-white hover:bg-blue-600 transition-colors w-full"
            >
              Continue
            </Button>

            <div className="flex w-full items-center justify-center">

              <p className="flex my-4 text-center text-sm">OR</p>

            </div>

            <Button
              onClick={handleNext}
              disabled={false}
              className="bg-white border-2 border-blue-600 rounded-2xl font-semibold mt-2 px-10 py-2 text-sm text-blue-600 w-full"
            >
              Create a Telstra ID
            </Button>
        </div>

      </div>

    </div>
  );
};

export default TestraEmail;
