import { useEffect, useRef, useState } from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AppLayout() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateFooterHeight();

    window.addEventListener("resize", updateFooterHeight);

    return () => {
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1} minHeight={`calc(100vh - ${footerHeight}px - 250px)`}>
        <Outlet />
      </Box>
      <Box ref={footerRef}>
        <Footer />
      </Box>
    </Box>
  );
}
