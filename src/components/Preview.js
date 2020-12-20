import SliderPreview from './SliderPreview';

export default function Preview({ inputs }) {
    return (
        <div className="preview">
            <h2>Preview</h2>
            {inputs.map(input => {
                if (input.type === 'slider') {
                    return (
                        <div key={input.id} className="preview-input">
                            {input.label.trim() && <label htmlFor={input.id}>{input.label}</label>}
                            <SliderPreview input={input} />
                            <div className="preview-input-slider-values">
                                <div className="preview-input-slider-values--min">{input.min}</div>
                                <div className="preview-input-slider-values--max">{input.max}</div>
                            </div>
                        </div>
                    );
                }

                return (
                    <div key={input.id} className="preview-input">
                        {input.label.trim() && <label htmlFor={input.id}>{input.label}</label>}
                        <input id={input.id} type={input.type} placeholder={input.placeholder} />
                    </div>
                );
            })}
        </div>
    );
}
