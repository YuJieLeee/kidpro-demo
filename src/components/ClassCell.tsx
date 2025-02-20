import { Box, TableCell, styled } from "@mui/material";

type Props = {
  weekday: string;
  time: {
    start: string;
    end: string;
  };
  classes: {
    name: string;
    color: string;
    day: string;
    start: string;
  }[];
  onClick?: () => void;
};

const CustomTableCell = styled(TableCell)(() => ({
  padding: 0,
  height: "30px",
}));

export default function ClassCell({ classes, weekday, onClick }: Props) {
  const isClassMoreThanFour = classes.length > 4;

  const firstGroup = isClassMoreThanFour ? classes.slice(0, 3) : classes;

  const secondGroup = isClassMoreThanFour ? classes.slice(3) : [];

  return (
    <CustomTableCell
      key={weekday}
      width="12.5%"
      sx={{ height: "100px" }}
      onClick={onClick}
    >
      <Box height="100%" display="flex" flexDirection="column">
        {firstGroup.map((c) => (
          <Box
            key={c.name}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="12px"
            bgcolor={c.color}
            flex="1"
            borderRadius="5px"
            margin="1px"
          >
            {c.name}
          </Box>
        ))}
        {isClassMoreThanFour && (
          <Box flex="1" height="100%" display="flex">
            {secondGroup.map((c) => (
              <Box
                bgcolor={c.color}
                key={c.name}
                width="100%"
                borderRadius="5px"
                margin="1px"
              />
            ))}
          </Box>
        )}

        {/* {isClassMoreThanFour
          ? ""
          : classesInThisCell.map((c) => (
              <Box
                key={c.name}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="12px"
                bgcolor={c.color}
                flex="1"
              >
                {c.name}
              </Box>
            ))} */}
        {/* {classesInThisCell.map((c) => (
          <Box
            key={c.name}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="12px"
            bgcolor={c.color}
            flex="1"
          >
            {c.name}
          </Box>
        ))} */}
      </Box>
    </CustomTableCell>
  );
}
