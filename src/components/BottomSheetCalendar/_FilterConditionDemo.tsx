import { Box, Chip } from "@mui/material";

export default function FilterConditionDemo() {
  return (
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
  );
}
