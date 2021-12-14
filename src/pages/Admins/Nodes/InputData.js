const InputData = [
    {
        label: 'Node ID',
        name: 'id',
        type: 'text',
        editable: false
    },
    {
        label: 'Node name',
        name: 'node_name',
        type: 'text',
        creatable: true
    },
    {
        label: 'Node version',
        name: 'node_version',
        type: 'text',
        creatable: true
    },
    {
        label: 'Room name',
        name: 'room_name',
        type: 'text'
    },
    {
        label: 'Status',
        name: 'status',
        type: 'option',
        option : ['Activated', 'Not activated']
    }
    
]

export default InputData;