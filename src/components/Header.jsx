import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 2, border: "2px" }}>
      <AppBar
        position="static"
        variant="primary"
        color="secondary"
        sx={{ border: 3 }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontFamily: "serif",
              flexGrow: 1,
            }}
          >
            Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
