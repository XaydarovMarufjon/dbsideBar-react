import { AppBar, Toolbar, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
        textAlign : colorConfigs.topbar.align
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          НАИМЕНОВАНИЕ БАЗ ДАННЫХ И ОПИСАНИЕ ПОЛЕЙ ВВОДА ДАННЫХ 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;