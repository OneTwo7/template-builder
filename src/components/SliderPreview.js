import { useState, useEffect } from 'react';
import Slider from 'rc-slider';

export default function SliderPreview({ input }) {
    const [value, changeValue] = useState(input.defaultValue);

    useEffect(() => {
        changeValue(input.defaultValue);
    }, [input.defaultValue]);

    function onChange(changedValue) {
        changeValue(changedValue);
    }

    return (
        <Slider
            id={input.id}
            min={input.min}
            max={input.max}
            step={input.step}
            value={value}
            onChange={onChange}
        />
    );
}