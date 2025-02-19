import { Box, SwipeableDrawer } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import WeekdayCalendar from "./WeekdayCalendar";

type Props = {
  open: boolean;
  onToggleDrawer: (newOpen: boolean) => () => void;
};

const drawerBleeding = 56;

export default function CalendarDrawer({ open, onToggleDrawer }: Props) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onToggleDrawer(false)}
      onOpen={() => {}}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          overflowY: "visible",
        },
      }}
    >
      <Box
        sx={{
          height: "95vh",
          overflow: "auto",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            margin: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ClearIcon onClick={onToggleDrawer(false)} fontSize="large" />
          <FilterAltOutlinedIcon color="primary" fontSize="large" />
        </Box>
        <Box flex="1" overflow="auto">
          <WeekdayCalendar />
        </Box>
        <Box height="100px" />
      </Box>
    </SwipeableDrawer>
  );
}
