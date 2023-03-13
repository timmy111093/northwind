import { useState } from "react";

export const useValidation = (validateFn:(value:any)=>boolean,initialValue:any) => {
   const [state,setState] = useState(initialValue);
   const [isValid,setIsValid] = useState<boolean>(validateFn(state));
}