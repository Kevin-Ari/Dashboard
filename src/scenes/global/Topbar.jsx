import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinkedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinkedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinkedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinkedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinkedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent='space-between' p={2}>
            {/* SEARCH BAR */}
            <Box display="flex"
            backgroundColor={colors.primary[400]} 
            borderRdius="3px">
                <InputBase sx= {{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
            </IconButton>            
        </Box>

        {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinkedIcon />
                    ) : (
                        <LightModeOutlinkedIcon />
                    ) }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinkedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinkedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinkedIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;