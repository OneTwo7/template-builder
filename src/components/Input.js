export default function Input(props) {
    const { innerRef, input, ...innerProps } = props;

    return (
        <div className="input" ref={innerRef} {...innerProps}>
            {input.type} input
        </div>
    );
}
