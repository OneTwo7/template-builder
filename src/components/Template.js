import TemplateInput from './TemplateInput';
import { Draggable } from 'react-beautiful-dnd';

export default function Template(props) {
    const { innerRef, template, onChange, innerProps } = props;

    return (
        <div className="template" ref={innerRef} {...innerProps}>
            {template.inputs.map((input, index) => (
                <div key={input.id} className="container">
                    <Draggable draggableId={input.id} index={index}>
                        {provided => (
                            <TemplateInput
                                innerRef={provided.innerRef}
                                input={input}
                                onChange={onChange}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            />
                        )}
                    </Draggable>
                </div>
            ))}
            {props.children}
        </div>
    );
}
