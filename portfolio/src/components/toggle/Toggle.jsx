import './toggle.css';
import Sun from '../../images/Sun.png'
import Moon from '../../images/Moon.png'
import {useContext} from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {

    // accessing my themeContext and reacts useContext method
    const theme = useContext(ThemeContext);

    const toggleTheme = ()=> 
    {
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Sun } alt="" className="t-icon" />
            <img src={Moon } alt="" className="t-icon"/>
            {/* conditional styling */}
            <div 
                className="t-button" 
                onClick={toggleTheme} 
                style={{left: theme.state.darkMode ? 0 : 25}}
            ></div>
        </div>
    )
}

export default Toggle
