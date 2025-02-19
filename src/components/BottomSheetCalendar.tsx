import { useState } from "react";

import { teal } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import CalendarDrawer from "./CalendarDrawer";

export default function BottomSheetCalendar() {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const toggleDrawer = (newOpen: boolean) => () => {
    if (newOpen === false) setSelectedLocation("");
    setOpen(newOpen);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          height: "100px",
          right: 0,
          left: 0,
          bgcolor: teal[100],
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
      </Box>

      <CalendarDrawer open={open} onToggleDrawer={toggleDrawer} />
    </Box>
  );
}

// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   height: drawerWidth,
//   transition: theme.transitions.create("height", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create("height", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   height: "80px",
// });

// const CustomDrawer = styled(Drawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//   height: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         ...openedMixin(theme),
//         "& .MuiDrawer-paper": openedMixin(theme),
//       },
//     },
//     {
//       props: ({ open }) => !open,
//       style: {
//         ...closedMixin(theme),
//         "& .MuiDrawer-paper": closedMixin(theme),
//       },
//     },
//   ],
// }));

// export default function BottomSheetCalendar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <Box width="100%">
//       <Button onClick={() => setOpen(true)}>open</Button>
//       <Button onClick={() => setOpen(false)}>close</Button>
//       <CustomDrawer
//         anchor="bottom"
//         open={open}
//         onClose={() => setOpen(false)}
//         variant="permanent"
//       >
//         <Box>
//           <FormControl>
//             <Select>
//               <MenuItem>華山中心</MenuItem>
//               <MenuItem>板橋中心</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//       </CustomDrawer>
//     </Box>
//   );
// }
