import {Action} from "@/utils/models/action.interface";
import {InputState} from "@/hooks/models/InputState.interface";
import {INPUT_ACTION_CHANGE, INPUT_ACTION_CLEAR, INPUT_ACTION_BLUR, InputActionType} from "@/hooks/models/InputAction";
import {ChangeEvent} from "react";
import {Validator} from "@/utils/validation/models/Validator";

const initialInputState: InputState = {
    text: '',
    hasBeenTouched: false
}
const inputReducer = (state: InputState, action: Action<InputActionType>) => {
    const {type, value = ''} = action
    switch (type) {
        case INPUT_ACTION_CHANGE:
            return {text: value, hasBeenTouched: state.hasBeenTouched}
        case INPUT_ACTION_CLEAR:
            return {text: state.text, hasBeenTouched: true}
        case INPUT_ACTION_BLUR:
            return {text: value, hasBeenTouched: state.hasBeenTouched}
        default:
            return {...state}
    }
}
 const useInput=(validator?:Validator)=>{
     const [{text, hasBeenTouched},dispatch]= useReducer(inputReducer,initialInputState)
     let displayError ;
     if(validator){
         const isValid = validator(text)
            displayError = !isValid && hasBeenTouched
     }
     const textChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch({type:INPUT_ACTION_CHANGE,value:e.target.value})
     }
     const inputBlurHandler = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch({type:INPUT_ACTION_BLUR})
     }
     const clearHandler = () => {
            dispatch({type:INPUT_ACTION_CLEAR})
     }
     return {
            text,
            hasBeenTouched,
            textChangeHandler,
            inputBlurHandler,
            clearHandler
     }
 }
 export default useInput
