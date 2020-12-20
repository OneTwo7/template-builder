export default function TemplateInput(props) {
    const { innerRef, input, onChange, ...innerProps } = props;

    if (input.type === 'slider') {
        return (
            <div className="template-input" ref={innerRef} {...innerProps}>
                <div className="template-input-group">
                    <label htmlFor={`label-${input.id}`}>Label:</label>
                    <input id={`label-${input.id}`} type="text" value={input.label} onChange={onChange} />
                </div>
                <div className="template-input-group">
                    <label htmlFor={`min-${input.id}`}>Min:</label>
                    <input id={`min-${input.id}`} type="number" value={input.min} onChange={onChange} />
                </div>
                <div className="template-input-group">
                    <label htmlFor={`max-${input.id}`}>Max:</label>
                    <input id={`max-${input.id}`} type="number" value={input.max} onChange={onChange} />
                </div>
                <div className="template-input-group">
                    <label htmlFor={`step-${input.id}`}>Step:</label>
                    <input id={`step-${input.id}`} type="number" value={input.step} onChange={onChange} />
                </div>
                <div className="template-input-group">
                    <label htmlFor={`defaultValue-${input.id}`}>Default value:</label>
                    <input
                        id={`defaultValue-${input.id}`}
                        type="number"
                        value={input.defaultValue}
                        onChange={onChange}
                    />
                </div>
            </div>
        );
    }

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
