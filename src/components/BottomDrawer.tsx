import { GiHamburgerMenu } from "react-icons/gi";
import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SideBar from "./Collections/SideBar";
import { SideBardata } from "../data/Header";

const drawerHeight = "75vh";

interface Props {
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: drawerHeight,
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  height: drawerHeight,
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

export default function BottomDrawer(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: drawerHeight,
            overflow: "hidden",
          },
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          right: 50,
          width: "8vw",
          bgcolor: "white",
          textAlign: "center",
          zIndex: 100,
          borderRadius: 100,
          padding: 0.2,
        }}
      >
        <div className="flex justify-center items-center">
          <GiHamburgerMenu
            className="text-2xl  rounded-md h-[6vh]  w-[15vw]"
            onClick={toggleDrawer(true)}
          />
        </div>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            height: drawerHeight,
          }}
        >
          <Puller />
          <SideBar buttondata={SideBardata} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
