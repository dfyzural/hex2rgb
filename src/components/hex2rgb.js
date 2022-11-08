import { useState } from "react";

function Hex2rgb() {
    const [hex, setHex] = useState('#');
    const [rgb, setRgb] = useState('');

    function hexInRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    const handleConvert = (evt) => {
        const { value } = evt.target;

        setHex(value);

        const app = document.querySelector('.App');

        if (value.length === 7 && value[0] === '#') {
            const rgb = hexInRgb(evt.target.value);

            if (!rgb) {
                app.style.backgroundColor = '#E94B35';
                setRgb('Ошибка!');
            }

            const rgbValue = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            app.style.backgroundColor = rgbValue
            setRgb(rgbValue);
        }

        if (value.length >= 7 && value[0] !== '#') {
            app.style.backgroundColor = '#E94B35';
            setRgb('Ошибка!');
        }
    }

    return (
            <div className="hexRgb">
                <input className="hex" type="text" name="hex" maxLength="7" onChange={handleConvert} />
                <div className="rgb">
                    <span>{rgb}</span>
                </div>
            </div>
    )
}

export default Hex2rgb;