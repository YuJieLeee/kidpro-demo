import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type Props = {
  onHandlePreviousStep: () => void;
  onHandleSelectedClass: (selectedClass: {
    name: string;
    color: string;
    day: string;
    start: string;
  }) => void;
  selectedCell: {
    day: string;
    start: string;
    end: string;
  };
  selectedClasses: {
    name: string;
    color: string;
    day: string;
    start: string;
  }[];
};

export default function ClassSelection({
  onHandlePreviousStep,
  selectedCell,
  selectedClasses,
  onHandleSelectedClass,
}: Props) {
  return (
    <Box padding="4px">
      <ArrowBackIosIcon
        onClick={onHandlePreviousStep}
        fontSize="small"
        sx={{ cursor: "pointer", position: "absolute", left: "5px" }}
      />
      <Typography textAlign="center">
        {selectedCell.day} {selectedCell.start} - {selectedCell.end}
      </Typography>
      <Box>
        {selectedClasses.map((c) => (
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
            height="60px"
            onClick={() => onHandleSelectedClass(c)}
          >
            <Typography>{c.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
