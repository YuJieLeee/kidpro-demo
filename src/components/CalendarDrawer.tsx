import { Box, SwipeableDrawer } from "@mui/material";
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
        <ClearIcon onClick={onToggleDrawer(false)} sx={{ margin: "5px" }} />
        <Box flex="1" overflow="auto">
          <WeekdayCalendar />
        </Box>
        <Box height="100px" />
      </Box>
    </SwipeableDrawer>
  );
}
