import React, { useState, useContext } from 'react';
import './ToggleSwitch.css';
import StylesContext  from '../../contexts/StylesContext';

function ToggleSwitch() {
    const { isDark } = useContext(StylesContext);
    const [isChecked, setChecked] = useState(isDark);
    const stylesContext = useContext(StylesContext);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isDark}
                onChange={() => {
                    stylesContext.changeTheme();
                    setChecked(!isChecked)
                }}
            />
            <span className="slider around"></span>
        </label>
    );
}

export default ToggleSwitch;