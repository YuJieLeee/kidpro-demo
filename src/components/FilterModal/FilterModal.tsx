import { forwardRef, useImperativeHandle, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ClearIcon from "@mui/icons-material/Clear";

export type FilterModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  borderRadius: "5px",
};

const FilterModal = forwardRef<FilterModalRef>((_, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    openModal: handleOpen,
    closeModal: handleClose,
  }));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <ClearIcon
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />

        <Box display="flex" flexDirection="column" gap="5px">
          <Typography variant="h4" textAlign="center" marginBottom="10px">
            年齡
          </Typography>
          <Typography>小孩生日</Typography>
          <DatePicker sx={{ width: "100%" }} />
          <Typography
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            color="secondary"
            alignSelf="end"
          >
            新增小孩＋
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography variant="h4" textAlign="center" marginBottom="10px">
            課程
          </Typography>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                bgcolor="#a0e9fd"
                width="100%"
                padding="5px"
                borderRadius="5px"
                variant="subtitle1"
              >
                核心力
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                bgcolor="#ffdca9"
                width="100%"
                padding="5px"
                borderRadius="5px"
                variant="subtitle1"
              >
                感覺統合
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                bgcolor="#95e5e5"
                width="100%"
                padding="5px"
                borderRadius="5px"
                variant="subtitle1"
              >
                專注力
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                bgcolor="#acf8ea"
                width="100%"
                padding="5px"
                borderRadius="5px"
                variant="subtitle1"
              >
                人際情緒
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                bgcolor="#fff1af"
                width="100%"
                padding="5px"
                borderRadius="5px"
                variant="subtitle1"
              >
                邏輯＋書寫
              </Typography>
            }
          />
        </Box>

        <Box>
          <Typography variant="h4" textAlign="center" marginBottom="10px">
            包含日期
          </Typography>
          <Box display="flex" alignItems="center" gap="5px">
            <DatePicker />
            <Typography>－</Typography>
            <DatePicker />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color="secondary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            全部取消
          </Typography>
          <Button color="secondary">篩選</Button>
        </Box>
      </Box>
    </Modal>
  );
});

export default FilterModal;
