import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  styled,
} from "@mui/material";
import { DateCalendar, PickersDayProps } from "@mui/x-date-pickers";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PickersDay } from "@mui/x-date-pickers";
import { parse } from "date-fns";

type Props = {
  onHandlePreviousStep: () => void;
  selectedClass: {
    name: string;
    color: string;
    day: string;
    start: string;
  };
  selectedCell: { day: string; start: string; end: string } | undefined;
};

const CustomCalendar = styled(DateCalendar)({
  width: "80%",
  height: "100%",
  ".MuiPickersDay-root": {
    height: "20px",
    width: "20px",
  },
  ".MuiDayCalendar-weekDayLabel": {
    width: "20px",
    height: "20px",
  },

  ".MuiPickersArrowSwitcher-root": {
    display: "none",
  },

  ".MuiPickersCalendarHeader-labelContainer": {
    justifyContent: "center",
    width: "100%",
  },
});

function CustomDate(
  props: PickersDayProps<Date> & { highlightedDays?: number[] }
) {
  const isHighlighted =
    props.day.getMonth() === 1 && [6, 13, 20, 27].includes(props.day.getDate());
  return (
    <PickersDay
      {...props}
      day={props.day}
      outsideCurrentMonth={props.outsideCurrentMonth}
      onDaySelect={props.onDaySelect}
      disableHighlightToday={true}
      sx={{
        ...(isHighlighted && {
          bgcolor: "#f9b18c",
          color: "black",
          "&:hover": {
            bgcolor: "darkred",
          },
        }),
      }}
    />
  );
}

export default function MonthCalendar({
  onHandlePreviousStep,
  selectedClass,
  selectedCell,
}: Props) {
  return (
    <Box position="relative" height="100%">
      <ArrowBackIosNewIcon
        onClick={onHandlePreviousStep}
        fontSize="small"
        sx={{ cursor: "pointer", position: "absolute", left: "5px" }}
      />
      <Typography textAlign="center">
        {selectedCell?.day} {selectedCell?.start} - {selectedCell?.end}
      </Typography>
      <Typography
        marginX="5px"
        padding="5px"
        borderRadius="5px"
        textAlign="center"
        bgcolor={selectedClass?.color}
      >
        {selectedClass?.name}
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="215px 215px"
        width="100%"
        overflow="auto"
      >
        <CustomCalendar
          disabled
          disableHighlightToday
          sx={{
            columnSpan: 1,
          }}
          referenceDate={parse("2025-01-01", "yyyy-MM-dd", new Date())}
          slots={{ day: CustomDate }}
        />
        <CustomCalendar
          disabled
          disableHighlightToday
          sx={{
            columnSpan: 1,
          }}
          referenceDate={parse("2025-02-01", "yyyy-MM-dd", new Date())}
          slots={{ day: CustomDate }}
        />
        <CustomCalendar
          disabled
          disableHighlightToday
          sx={{
            columnSpan: 1,
          }}
          referenceDate={parse("2025-03-01", "yyyy-MM-dd", new Date())}
          slots={{ day: CustomDate }}
        />
      </Box>

      <Box
        width="100%"
        position="sticky"
        bottom="0"
        bgcolor="white"
        boxShadow="0px -1px 5px 0px rgba(0,0,0,0.2)"
        padding="10px"
      >
        <Box
          width="100%"
          border="1px solid #f9b18c"
          borderRadius="5px"
          padding="5px"
        >
          <FormControlLabel
            sx={{
              width: "100%",
              ".MuiFormControlLabel-label": {
                flex: 1,
              },
            }}
            control={<Checkbox />}
            label={
              <Box display="flex" justifyContent="space-between" gap="5px">
                <Box flexShrink="0">
                  <Typography textAlign="center">2-C期</Typography>
                  <Typography
                    color="primary"
                    textAlign="center"
                    fontSize="12px"
                  >
                    庫存2
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <Typography>
                    4/9、4/16、4/23、4/30、5/7、5/14、5/21、5/28
                  </Typography>
                </Box>

                <Box flexShrink="0">
                  <Typography
                    textAlign="center"
                    color="secondary"
                    fontWeight="700"
                  >
                    $5600
                  </Typography>
                  <Typography
                    textAlign="center"
                    color="primary"
                    fontSize="12px"
                    sx={{ textDecoration: "line-through" }}
                  >
                    $8000
                  </Typography>
                </Box>
              </Box>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
