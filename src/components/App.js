import Elements from './Elements';
import Template from './Template';
import Preview from './Preview';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

function App() {
    const [state, updateState] = useState({
        inputs: [
            {
                id: 'input-0',
                hasLabel: true,
                type: 'number',
                label: 'Input a Number',
                placeholder: '0',
            },
            {
                id: 'input-1',
                hasLabel: true,
                type: 'text',
                label: 'Input Text',
                placeholder: 'Placeholder',
            },
            {
                id: 'input-2',
                hasLabel: true,
                type: 'slider',
                label: 'Select a value',
                min: 0,
                max: 120,
                step: 1,
                defaultValue: 0,
            },
        ],
        template: {
            numberOfInputs: 3,
            inputs: [],
        },
        nextInputId: 3,
    });

    function onDragEnd(result) {
        const { destination, source, draggableId } = result;
        
        if (!destination) {
            if (source.droppableId === 'template') {
                const inputs = [...state.template.inputs];
        
                inputs.splice(source.index, 1);
        
                updateState({
                    ...state,
                    template: {
                        ...state.template,
                        inputs,
                    },
                });  
            }

            return;
        }

        if (destination.droppableId === 'elements') {
            if (source.droppableId === 'elements') {
                return;
            }

            const inputs = [...state.template.inputs];

            inputs.splice(source.index, 1);

            updateState({
                ...state,
                template: {
                    ...state.template,
                    inputs,
                },
            });

            return;
        }

        const inputs = [...state.template.inputs];
        let nextInputId = state.nextInputId;

        if (source.droppableId === 'elements') {
            const draggedInput = state.inputs.find(({ id }) => id === draggableId);

            if (!draggedInput) {
                return;
            }

            inputs.splice(destination.index, 0, {
                ...draggedInput,
                id: `input-${nextInputId}`,
            });
            nextInputId += 1;
        } else if (source.droppableId === 'template') {
            if (source.index === destination.index) {
                return;
            }

            [inputs[source.index], inputs[destination.index]] = [inputs[destination.index], inputs[source.index]];
        }

        updateState({
            ...state,
            template: {
                ...state.template,
                inputs,
            },
            nextInputId,
        });
    }

    function onChange(event) {
        const { currentTarget: input } = event;

        const splitId = input.id.split('-');
        const type = splitId[0];
        const inputId = splitId.slice(1).join('-');
        const inputs = [...state.template.inputs];
        const inputIndex = inputs.findIndex(({ id }) => id === inputId);

        if (inputIndex === -1) {
            return;
        }

        const updatedInput = {
            ...inputs[inputIndex],
            [type]: input.value,
        };

        inputs[inputIndex] = updatedInput;

        updateState({
            ...state,
            template: {
                ...state.template,
                inputs,
            },
        });
    }

    return (
        <div className="app">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="elements" isDropDisabled={true}>
                    {provided => (
                        <Elements
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            inputs={state.inputs}
                        >
                            {provided.placeholder}
                        </Elements>
                    )}
                </Droppable>
                <Droppable droppableId="template">
                    {provided => (
                        <Template
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            template={state.template}
                            onChange={onChange}
                        >
                            {provided.placeholder}
                        </Template>
                    )}
                </Droppable>
                <Preview inputs={state.template.inputs} />
            </DragDropContext>
        </div>
    );
}

export default App;
