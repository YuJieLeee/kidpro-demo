import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.pageYOffset);
  const [test, setTest] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY <= 60) {
      setVisible(true);
    } else if (lastScrollY.current > currentScrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
      zIndex={10}
      bgcolor="white"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-out",
      }}
    >
      <img
        src="/kidpro-demo/kidpro-logo.png"
        alt="Logo"
        style={{ height: "60px" }}
      />
      <Box>
        <SearchIcon
          color="primary"
          sx={{ fontSize: "40px", cursor: "pointer" }}
        />
        <PersonIcon
          color="primary"
          sx={{ fontSize: "40px", cursor: "pointer" }}
        />
        <ShoppingCartIcon
          color="primary"
          sx={{ fontSize: "40px", cursor: "pointer" }}
        />
        <MenuIcon
          color="primary"
          sx={{ fontSize: "40px", cursor: "pointer" }}
          onClick={() => setTest(!test)}
        />
      </Box>
    </Box>
  );
}
