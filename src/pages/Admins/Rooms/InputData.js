const EditData = [
  {
    label: "Room ID",
    name: "id",
    type: "text",
    editable: false,
  },
  {
    label: "Room name",
    name: "name",
    type: "text",
    creatable: true,
  },
  {
    label: "Node ID",
    name: "NodeId",
    type: "option",
    creatable: true,
  },
  {
    label: "Room capacity",
    name: "capacity",
    type: "number",
    editable: false,
    creatable: true,
  },
  {
    label: "Room status",
    name: "status",
    type: "option",
    option: ["Reserved", "In Use", "Available", "Hidden"],
  },
];

export default EditData;
