import { Box, SwipeableDrawer } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import WeekdayCalendar from "../WeekdayCalendar";
import { useEffect, useRef, useState } from "react";
import FilterModal, { FilterModalRef } from "../FilterModal";
import ClassSelection from "../ClassSelection";
import classSchedule from "../../const/classes";
import MonthCalendar from "../MonthCalendar";
import FilterConditionDemo from "./_FilterConditionDemo";

type Props = {
  open: boolean;
  onToggleDrawer: (newOpen: boolean) => () => void;
  onHandleSelectedClass: (
    c:
      | {
          name: string;
          color: string;
          day: string;
          start: string;
        }
      | undefined
  ) => void;
  selectedClass?: {
    name: string;
    color: string;
    day: string;
    start: string;
  };
};

const drawerBleeding = 56;

export default function CalendarDrawer({
  open,
  onToggleDrawer,
  onHandleSelectedClass,
  selectedClass,
}: Props) {
  const filterModalRef = useRef<FilterModalRef>(null);
  const [step, setStep] = useState(0);
  const [selectedCell, setSelectedCell] = useState<{
    day: string;
    start: string;
    end: string;
  }>();

  const selectedClasses = classSchedule.filter(
    (schedule) =>
      schedule.day === selectedCell?.day &&
      schedule.start === selectedCell?.start
  );

  const handleSelectedCell = (
    selectedCell:
      | {
          day: string;
          start: string;
          end: string;
        }
      | undefined
  ) => {
    const selectedClass = classSchedule.filter(
      (schedule) =>
        schedule.day === selectedCell?.day &&
        schedule.start === selectedCell?.start
    );
    setSelectedCell(selectedCell);
    setStep(() => (!!selectedCell && selectedClass.length > 1 ? 1 : 0));
  };

  const handlePrevStep = () => {
    setStep((prev) => {
      if (prev === 1) onHandleSelectedClass(undefined);
      if (selectedClasses.length === 1) return 0;
      return prev > 0 ? prev - 1 : prev;
    });
  };

  useEffect(() => {
    if (selectedClass) setStep(2);
  }, [selectedClass, setStep]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={() => {
        onToggleDrawer(false)();
        onHandleSelectedClass(undefined);
        handleSelectedCell(undefined);
      }}
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

        <FilterConditionDemo />

        <Box
          flex="1"
          display="flex"
          sx={{ overflowY: "auto", overflowX: "hidden", position: "relative" }}
        >
          <Box
            sx={{
              width: "100vw",
              position: "absolute",
              left: 0,
              transition: "transform 0.3s ease-in-out",
              transform: step === 0 ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <WeekdayCalendar
              onHandleSelectedCell={handleSelectedCell}
              onHandleSelectedClass={onHandleSelectedClass}
            />
          </Box>
          <Box
            sx={{
              width: "100vw",
              position: "absolute",
              left: "100%",
              transition: "transform 0.3s ease-in-out",
              transform:
                step === 1
                  ? "translateX(-100%)"
                  : step === 2
                  ? "translateX(-200%)"
                  : "translateX(0)",
            }}
          >
            <ClassSelection
              onHandlePreviousStep={handlePrevStep}
              selectedCell={selectedCell || { day: "", start: "", end: "" }}
              selectedClasses={selectedClasses}
              onHandleSelectedClass={onHandleSelectedClass}
            />
          </Box>
          <Box
            sx={{
              width: "100vw",
              height: "100%",
              position: "absolute",
              left: "200%",
              transition: "transform 0.3s ease-in-out",
              transform: step === 2 ? "translateX(-200%)" : "translateX(0)",
            }}
          >
            <MonthCalendar
              onHandlePreviousStep={handlePrevStep}
              selectedClass={selectedClass!}
            />
          </Box>
          <FilterModal ref={filterModalRef} />
        </Box>

        <Box height="100px" />
      </Box>
    </SwipeableDrawer>
  );
}
