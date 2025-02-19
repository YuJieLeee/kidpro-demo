import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1} minHeight="calc(100vh - 350px)">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
