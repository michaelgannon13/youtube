import { createContext, useReducer } from "react";

// useContext / useState hook abstracted to separate file
export const ThemeContext = createContext();

// set inital state - darkMode is false 
const INITIAL_STATE = { darkMode: true }

// to change the above state we need a reducer
// it takes parameters and handles the logic
const themeReducer = (state, action) => {
     switch (action.type) {
         case "TOGGLE":
            state = {darkMode: !state.darkMode} 
         default:
            return state;
    }
}

// ThemeProvider takes props 
export const ThemeProvider = (props)=> { 
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}