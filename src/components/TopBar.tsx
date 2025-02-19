import {
  Box,
  FormControlLabel,
  Switch,
  Button as MaterialButton,
} from "@mui/material";

export const Topbar = () => {
  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <FormControlLabel control={<Switch checked={true} />} label="Enable" />

      <MaterialButton size="small" variant="outlined" color="secondary">
        Serialize JSON to console
      </MaterialButton>
    </Box>
  );
};
