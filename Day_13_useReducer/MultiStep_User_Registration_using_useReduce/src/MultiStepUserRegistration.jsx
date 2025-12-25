import { useReducer } from "react";
import { formReducer, initialState } from "./reducers/formReducer";

function MultiStepRegistrationForm(){

    const [state,dispatch] = useReducer(formReducer,initialState);
    const {step,formData,isSubmitted} = state;

    const handleChange = (e) => {
        dispatch(
            {
                type : "UPDATE_FIELD",
                value : e.target.value,
                field : e.target.name
            }
        )

    }

    if(isSubmitted){
        return (
            
                <div className="details">
                <h2>Form Submitted Successfully</h2>
                
                    <p>Name : {formData.name}</p>
                    <p>Email : {formData.email}</p>
                    <p>Username : {formData.username}</p>
                    <p>Password: {formData.password}</p>
                </div>
                
            
        )
    }

    
    return(
        <div className="container">
            {
                step === 1 && 
                <div>
                <h2>Personal Details</h2>
                <input type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange}/>
                <input type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange}/>
                <div className="btns">
                    <button onClick={()=>{dispatch({type:"RESET_FORM"})}}>Reset</button>
                    <button onClick={()=>dispatch({type:"NEXT_STEP"})}>Next</button>
                </div>
            </div>
            }
            {
                step === 2 && 
                <div>
                <h2>Account Details</h2>
                <input type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={handleChange}/>
                <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange}/>
                <div className="btns">
                    <button onClick={()=>dispatch({type:"PREVIOUS_STEP"})}>Back</button>
                    <button onClick={()=>{dispatch({type:"RESET_FORM"})}}>Reset</button>
                    <button onClick={()=>dispatch({type:"NEXT_STEP"})}>Next</button>
                </div>
            </div>
            }
            {
                step === 3 && 
                <div>
                <h2>Review Details & Submit </h2>
                <p>Name : {formData.name}</p>
                <p>Email : {formData.email}</p>
                <p>Username : {formData.username}</p>
                <p>Password: {formData.password}</p>
                <div className="btns">
                    <button onClick={()=>dispatch({type:"PREVIOUS_STEP"})}>Back</button>
                    <button onClick={()=>dispatch({type:"SUBMIT_FORM"})}>Submit</button>
                </div> 
            </div>
            }

        </div>
    )
}

export default MultiStepRegistrationForm;