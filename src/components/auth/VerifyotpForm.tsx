
const VerifyotpForm = () => {
    const [code, setCode] = useState<string[]>(new Array(5).fill(''));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const isLoading = false;
  const isDisabled = code.find((cv)=>cv=="") == ""; //check if any code is empty string




  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, '');
    const newCode = [...code];

    if (value) {
      newCode[index] = value;
      setCode(newCode);

      if (index < 4 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];
      if (code[index]) {
        // Clear current value
        newCode[index] = '';
        setCode(newCode);
      } else if (index > 0) {
        // Move to previous input
        inputRefs.current[index - 1]?.focus();
        const updatedCode = [...code];
        updatedCode[index - 1] = '';
        setCode(updatedCode);
      }
    }
  };


 
  const handleVerify = () => {
    console.log(code);
    const otp = code.join('');
    SuccessToast("Verify Success")
  }
  return (
    <>
     <form className="space-y-4">
              {/* Code Inputs */}
      <div className="flex justify-center gap-3 mb-6">
        {code.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => {
                inputRefs.current[idx] = el;
            }}
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>
     
             <button className="w-full bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
               Continue
             </button>
           </form>
    </>
  )
}

export default VerifyotpForm