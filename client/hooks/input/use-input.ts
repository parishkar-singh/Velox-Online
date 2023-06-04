import {Action} from "@/utils/models/action.interface";
import {InputState} from "@/hooks/models/InputState.interface";
import {INPUT_ACTION_CHANGE, INPUT_ACTION_CLEAR, INPUT_ACTION_BLUR, InputActionType} from "@/hooks/models/InputAction";
import {ChangeEvent, useReducer} from "react";
import {Validator} from "@/utils/validation/models/Validator";


const initialInputState: InputState = {
    text: '',
    hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
    const { type, value = '' } = action;

    switch (type) {
        case INPUT_ACTION_CHANGE:
            return { text: value, hasBeenTouched: state.hasBeenTouched };
        case INPUT_ACTION_BLUR:
            return { text: state.text, hasBeenTouched: true };
        case INPUT_ACTION_CLEAR:
            return { text: '', hasBeenTouched: false };

        default:
            return { ...state };
    }
};

const useInput = (validatorFn?: Validator) => {
    const [{ text, hasBeenTouched }, dispatch] = useReducer(
        inputReducer,
        initialInputState
    );

    let shouldDisplayError;

    if (validatorFn) {
        const isValid = validatorFn(text);
        shouldDisplayError = !isValid && hasBeenTouched;
    }

    const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: INPUT_ACTION_CHANGE, value: e.target.value });
    };

    const inputBlurHandler = () => {
        dispatch({ type: INPUT_ACTION_BLUR });
    };

    const clearHandler = () => {
        dispatch({ type: INPUT_ACTION_CLEAR });
    };

    return {
        text,
        shouldDisplayError,
        textChangeHandler,
        inputBlurHandler,
        clearHandler,
    };
};

export default useInput;
