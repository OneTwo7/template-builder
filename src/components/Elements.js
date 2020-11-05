import Container from './Container';

export default function Elements(props) {
    const { innerRef, inputs, ...innerProps } = props;

    return (
        <div className="elements" ref={innerRef} {...innerProps}>
            {inputs.map((input, index) => <Container key={input.id} input={input} index={index} />)}
            {props.children}
        </div>
    );
}
