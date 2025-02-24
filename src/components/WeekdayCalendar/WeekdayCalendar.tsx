import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import ClassCell from "./_ClassCell";
import classSchedule from "../../const/classes";

const weekdays = ["一", "二", "三", "四", "五"];
const weekends = ["六", "日"];
const weekdayClassSchedule = [
  { start: "09:00", end: "09:50" },
  { start: "10:00", end: "10:50" },
  { start: "11:10", end: "12:00" },
  { start: "14:00", end: "14:50" },
  { start: "15:10", end: "16:00" },
  { start: "16:20", end: "17:10" },
  { start: "17:30", end: "18:20" },
  { start: "18:40", end: "19:30" },
  { start: "19:50", end: "20:40" },
];

const weekendClassSchedule = [
  { start: "09:00", end: "09:50" },
  { start: "10:10", end: "11:00" },
  { start: "11:20", end: "12:10" },
  { start: "13:30", end: "14:20" },
  { start: "14:50", end: "15:40" },
  { start: "16:00", end: "16:50" },
  { start: "17:10", end: "18:00" },
  { start: "18:50", end: "19:20" },
  { start: "19:40", end: "20:30" },
];

const CustomTableCell = styled(TableCell)(() => ({
  padding: 0,
  height: "30px",
}));

type Props = {
  onHandleSelectedCell: (selectedCell: {
    day: string;
    start: string;
    end: string;
  }) => void;
  onHandleSelectedClass: (selectedClass: {
    name: string;
    color: string;
    day: string;
    start: string;
  }) => void;
};

export default function WeekdayCalendar({
  onHandleSelectedCell,
  onHandleSelectedClass,
}: Props) {
  const getClass = (day: string, startTime: string) => {
    const resultClass =
      classSchedule.filter(
        (schedule) => schedule.day === day && schedule.start === startTime
      ) || [];

    return resultClass;
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <CustomTableCell width="6.25%" />
          {weekdays.map((weekday) => (
            <CustomTableCell key={weekday} width="12.5%">
              <Typography textAlign="center">{weekday}</Typography>
            </CustomTableCell>
          ))}
          <CustomTableCell width="6.25%" />
          {weekends.map((weekend) => (
            <CustomTableCell key={weekend} width="12.5%">
              <Typography textAlign="center">{weekend}</Typography>
            </CustomTableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {weekdayClassSchedule.map((time, index) => (
          <TableRow key={index}>
            <CustomTableCell width="6.25%">
              <Typography
                fontSize="12px"
                width="38px"
                textAlign="center"
                sx={{ wordBreak: "break-word" }}
              >
                {time.start}｜{time.end}
              </Typography>
            </CustomTableCell>

            {weekdays.map((weekday) => (
              <ClassCell
                key={weekday}
                weekday={weekday}
                time={time}
                classes={getClass(weekday, time.start)}
                onClick={() => {
                  onHandleSelectedCell({
                    day: weekday,
                    start: time.start,
                    end: time.end,
                  });

                  if (getClass(weekday, time.start).length === 1)
                    onHandleSelectedClass(getClass(weekday, time.start)[0]);
                }}
              />
            ))}

            <CustomTableCell sx={{ textAlign: "center" }} width="6.25%">
              <Typography
                fontSize="12px"
                width="38px"
                textAlign="center"
                sx={{ wordBreak: "break-word" }}
              >
                {weekendClassSchedule[index].start}｜
                {weekendClassSchedule[index].end}
              </Typography>
            </CustomTableCell>

            {weekends.map((weekend) => (
              <ClassCell
                key={weekend}
                weekday={weekend}
                time={weekendClassSchedule[index]}
                classes={getClass(weekend, weekendClassSchedule[index].start)}
                onClick={() =>
                  onHandleSelectedCell({
                    day: weekend,
                    start: weekendClassSchedule[index].start,
                    end: weekendClassSchedule[index].end,
                  })
                }
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
