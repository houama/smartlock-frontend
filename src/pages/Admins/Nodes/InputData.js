const InputData = [
  {
    label: "Node ID",
    name: "id",
    type: "text",
    editable: false,
  },
  {
    label: "Node name",
    name: "name",
    type: "text",
    creatable: true,
  },
  {
    label: "Node version",
    name: "version",
    type: "text",
  },
  {
    label: "Room name",
    name: "RoomName",
    type: "text",
    editable: false,
  },
  {
    label: "Status",
    name: "status",
    type: "option",
    option: ["Active", "Not Active"],
  },
];

export default InputData;
