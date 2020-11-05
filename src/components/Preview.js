export default function Preview({ inputs }) {
    return (
        <div className="preview">
            <h2>Preview</h2>
            {inputs.map(input => (
                <div key={input.id} className="preview-input">
                    {input.label.trim() && <label htmlFor={input.id}>{input.label}</label>}
                    <input id={input.id} type={input.type} placeholder={input.placeholder} />
                </div>
            ))}
        </div>
    );
}
