import { useState } from "react";

const PasswordInput = ({
  name,
  // type = "password",
  value,
  onChange,
  placeholder,
  onBlur,
  className,
  error,
}) => {

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('password');

  const toggleVisible = () => {
    setVisible(!visible);
    if(!visible){
      // passwordRef.current.type = 'text';
      setType('text')
    }else{
      setVisible(!visible);
      // passwordRef.current.type = 'password';
      setType('password')
    }
  }
  return (
    <div className="mb-4 relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${
          error ? "border-red-500" : "border-gray-300"
        } `}
      />

        <div                                    
            onClick={toggleVisible}
            className='flex flex-row items-center justify-center ml-3 px-1 cursor-pointer absolute top-2 right-1'
            // className='flex flex-row items-end justify-end ml-3 px-1 cursor-pointer -mt-10'
        >
          <p>{visible ? 
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16"> <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/> <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/> </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="md:w-8 md:h-8 w-6 h-6 text-gray-400" viewBox="0 0 16 16"> <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/> <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/> </svg>
            }
          </p>
          
        </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;
