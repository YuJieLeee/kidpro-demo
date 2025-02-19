import { Box, Chip, SwipeableDrawer } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import WeekdayCalendar from "./WeekdayCalendar";
import { useRef } from "react";
import FilterModal, { FilterModalRef } from "./FilterModal";

type Props = {
  open: boolean;
  onToggleDrawer: (newOpen: boolean) => () => void;
};

const drawerBleeding = 56;

export default function CalendarDrawer({ open, onToggleDrawer }: Props) {
  const filterModalRef = useRef<FilterModalRef>(null);

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
          <ClearIcon
            onClick={onToggleDrawer(false)}
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
          <FilterAltOutlinedIcon
            sx={{ cursor: "pointer" }}
            color="primary"
            fontSize="large"
            onClick={() => filterModalRef.current?.openModal()}
          />
        </Box>
        <Box display="flex" gap="5px" flexWrap="wrap" padding="5px">
          <Chip
            label="3歲"
            onDelete={() => {}}
            sx={{
              color: "white",
              bgcolor: "#28c8c8",
              ".MuiChip-deleteIcon": {
                color: "white",
              },
            }}
          />
          <Chip
            label="國小書寫"
            onDelete={() => {}}
            sx={{
              color: "white",
              bgcolor: "#28c8c8",
              ".MuiChip-deleteIcon": {
                color: "white",
              },
            }}
          />
          <Chip
            label="感覺統合"
            onDelete={() => {}}
            sx={{
              color: "white",
              bgcolor: "#28c8c8",
              ".MuiChip-deleteIcon": {
                color: "white",
              },
            }}
          />
          <Chip
            label="2025/02/01 - 2025/02/15"
            onDelete={() => {}}
            sx={{
              color: "white",
              bgcolor: "#28c8c8",
              ".MuiChip-deleteIcon": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box flex="1" overflow="auto">
          <WeekdayCalendar />
          <FilterModal ref={filterModalRef} />B
        </Box>
        <Box height="100px" />
      </Box>
    </SwipeableDrawer>
  );
}
