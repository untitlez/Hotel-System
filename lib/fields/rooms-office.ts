export const inputItems = [
  {
    name: "roomNumber",
    label: "Room Number",
    type: "text",
    placeholder: "เช่น A101",
    required: true,
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "เช่น เชียงใหม่, ประเทศไทย",
    required: true,
  },
  {
    name: "type",
    label: "Room Type",
    type: "select",
    placeholder: "เลือกประเภทห้อง",
    options: [
      { value: "Single Room", label: "Single Room" },
      { value: "Twin Room", label: "Twin Room" },
      { value: "Deluxe Room", label: "Deluxe Room" },
      { value: "Suite", label: "Suite" },
    ],
    required: false,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "รายละเอียดเพิ่มเติม",
    required: false,
  },
  {
    name: "pricePerNight",
    label: "Price",
    type: "number",
    placeholder: "เช่น 1000",
    required: true,
  },
];
