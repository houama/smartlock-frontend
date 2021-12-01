const InputData = [
    {
        label: 'Node ID',
        name: 'id',
        type: 'text',
        editable: false
    },
    {
        label: 'Node name',
        name: 'name',
        type: 'text',
        creatable: true
    },
    {
        label: 'Node version',
        name: 'version',
        type: 'text'
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
        option : ['Activated', 'Deactivated']
    }
    
]

export default InputData;