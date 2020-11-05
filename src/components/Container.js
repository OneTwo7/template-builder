import { Draggable } from 'react-beautiful-dnd';
import Input from './Input';

export default function Container(props) {
    return (
        <div className="container">
            <Draggable draggableId={props.input.id} index={props.index}>
                {provided => (
                    <Input
                        innerRef={provided.innerRef}
                        input={props.input}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    />
                )}
            </Draggable>
        </div>
    );
}
