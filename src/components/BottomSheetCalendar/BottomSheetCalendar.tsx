import { useState } from "react";

import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import CalendarDrawer from "./_CalendarDrawer";

export default function BottomSheetCalendar() {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const [selectedClass, setSelectedClass] = useState<{
    name: string;
    color: string;
    day: string;
    start: string;
  }>();

  const handleSelectedClass = (
    c:
      | {
          name: string;
          color: string;
          day: string;
          start: string;
        }
      | undefined
  ) => setSelectedClass(c);

  const toggleDrawer = (newOpen: boolean) => () => {
    if (newOpen === false) setSelectedLocation("");
    setOpen(newOpen);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          height: "100px",
          right: 0,
          left: 0,
          bgcolor: "#e5f9f9",
          zIndex: 1300,
          padding: 2,
          display: "flex",
          gap: "20px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ width: "200px" }}>
          <InputLabel>請選取上課地點</InputLabel>
          <Select
            label="請選取上課地點"
            value={selectedLocation}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
              if (e.target.value) setOpen(true);
            }}
          >
            <MenuItem value="place1">華山中心</MenuItem>
            <MenuItem value="place2">板橋中心</MenuItem>
          </Select>
        </FormControl>

        <Box display="flex" flexDirection="column" alignItems="center">
          <MapOutlinedIcon color="secondary" />
          <Link color="secondary">依地圖選取</Link>
        </Box>

        {selectedClass && <Button color="secondary">加入購物車</Button>}
      </Box>

      <CalendarDrawer
        open={open}
        onToggleDrawer={toggleDrawer}
        onHandleSelectedClass={handleSelectedClass}
        selectedClass={selectedClass}
      />
    </Box>
  );
}
