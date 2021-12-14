const EditData = [
  {
    label: "Booking ID",
    name: "id",
    type: "text",
    editable: false,
  },
  {
    label: "Room ID",
    name: "room_id",
    type: "text",
    editable: false,
  },
  {
    label: "Room name",
    name: "room_name",
    type: "text",
    editable: false,
  },
  {
    label: "Start date",
    name: "start_date",
    type: "text",
    editable: false,
  },
  {
    label: "End date",
    name: "end_date",
    type: "text",
    editable: false,
  },
  {
    label: "Amount of participant",
    name: "participant",
    type: "text",
    editable: false,
  },
  {
    label: "List of participant",
    name: "participant_list",
    type: "text",
  },
  {
    label: "Status",
    name: "status",
    type: "option",
    option: ["Waiting", "Approve", "Decline"],
  },
];

export default EditData;
