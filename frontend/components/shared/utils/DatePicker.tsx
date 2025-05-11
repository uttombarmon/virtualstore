import { DatePicker } from "@mui/x-date-pickers";

import { FunctionsConfigManifest } from "next/dist/build";

function CustomDatePicker({
  dateText,
}: {
  dateText: string;
  setDate: FunctionsConfigManifest;
}) {
  return;
  <DatePicker label={`${dateText}`} />;
}

export default CustomDatePicker;
