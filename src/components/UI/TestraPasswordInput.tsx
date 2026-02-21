import { useState } from "react";

const TestraPasswordInput = ({
  name,
  label,
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
    <div className="mb-4 relative mt-4">
      <label
        htmlFor={name}
        className="block text-sm font-black text-gray-700 mb-1"
      >
        {label}
      </label>
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
            className='flex flex-row items-center justify-center ml-3 px-1 cursor-pointer absolute top-10 right-3'
            // className='flex flex-row items-end justify-end ml-3 px-1 cursor-pointer -mt-10'
        >
          <p>{visible ? 
              <span className="underline font-bold text-blue-600 text-sm">Hide</span>
            : 
              <span className="underline font-bold text-blue-600 text-sm">Show</span>
            }
          </p>
          
        </div>

        <p className="text-sm pt-2 pb-2 mt-4"><a href="#" className="text-blue-600 underline font-bold" target="_blank">Recover account</a></p>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TestraPasswordInput;
