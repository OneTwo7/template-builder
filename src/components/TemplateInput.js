export default function TemplateInput(props) {
    const { innerRef, input, onChange, ...innerProps } = props;

    return (
        <div className="template-input" ref={innerRef} {...innerProps}>
            <div className="template-input-group">
                <label htmlFor={`label-${input.id}`}>Label:</label>
                <input id={`label-${input.id}`} type="text" value={input.label} onChange={onChange} />
            </div>
            <div className="template-input-group">
                <label htmlFor={`placeholder-${input.id}`}>Placeholder:</label>
                <input
                    id={`placeholder-${input.id}`}
                    type={input.type}
                    value={input.placeholder}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}