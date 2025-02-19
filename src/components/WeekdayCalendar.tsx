import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

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

const classSchedule = [
  {
    name: "2-3核心",
    color: "#a0e9fd",
    day: "一",
    startTime: "09:00",
  },
  {
    name: "3-6專注",
    color: "#ffdca9",
    day: "一",
    startTime: "09:00",
  },
  {
    name: "2-3核心",
    color: "#a0e9fd",
    day: "五",
    startTime: "09:00",
  },
  {
    name: "4-6人際",
    color: "#ffdca9",
    day: "六",
    startTime: "10:10",
  },
  {
    name: "2-4專＋感",
    color: "#e0fcf6",
    day: "六",
    startTime: "10:10",
  },
  {
    name: "2-3核心",
    color: "#a0e9fd",
    day: "六",
    startTime: "10:10",
  },
  {
    name: "國小書寫",
    color: "#fff1af",
    day: "日",
    startTime: "09:00",
  },
];

const getClass = (day: string, startTime: string) => {
  const resultClass =
    classSchedule.filter(
      (schedule) => schedule.day === day && schedule.startTime === startTime
    ) || [];

  return resultClass;
};

const CustomTableCell = styled(TableCell)(() => ({
  padding: 0,
  height: "30px",
}));

export default function WeekdayCalendar() {
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
              <CustomTableCell
                key={weekday}
                width="12.5%"
                sx={{ height: "100px" }}
              >
                <Box height="100%" display="flex" flexDirection="column">
                  {getClass(weekday, time.start).map((c) => (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="12px"
                      bgcolor={c.color}
                      flex="1"
                    >
                      {c.name}
                    </Box>
                  ))}
                </Box>
              </CustomTableCell>
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
              <CustomTableCell key={weekend} width="12.5%">
                <Box height="100%" display="flex" flexDirection="column">
                  {getClass(weekend, weekendClassSchedule[index].start).map(
                    (c) => (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="12px"
                        bgcolor={c.color}
                        flex="1"
                      >
                        {c.name}
                      </Box>
                    )
                  )}
                </Box>
              </CustomTableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    // <Box display="grid" gridTemplateColumns="repeat(16,1fr)">
    //   <Typography gridColumn="span 1" />

    //   {weekdays.map((weekday) => (
    //     <Typography key={weekday} gridColumn="span 2" textAlign="center">
    //       {weekday}
    //     </Typography>
    //   ))}

    //   <Typography gridColumn="span 1" />

    //   {weekends.map((weekend) => (
    //     <Typography key={weekend} gridColumn="span 2" textAlign="center">
    //       {weekend}
    //     </Typography>
    //   ))}

    //   {weekdayClassSchedule.map((time, index) => (
    //     <>
    //       <Typography key={index} gridColumn="span 1" textAlign="center">
    //         {time}
    //       </Typography>
    //       <Typography gridColumn="span 2" />
    //       <Typography gridColumn="span 2" />
    //       <Typography gridColumn="span 2" />
    //       <Typography gridColumn="span 2" />
    //       <Typography gridColumn="span 2" />
    //       <Typography gridColumn="span 1" textAlign="center">
    //         {weekendClassSchedule[index]}
    //       </Typography>
    //       <Typography gridColumn="span 2" />
    //       <Typography gridColumn="span 2" />
    //     </>
    //   ))}
    // </Box>
  );
}
