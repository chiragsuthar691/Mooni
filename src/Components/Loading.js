import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const Loading = () => {
  return (
    <div>
      <Box sx={{ display: "flex", height: "25%" }}>
        <CircularProgress size="1.5rem" />
      </Box>
    </div>
  );
};

export default Loading;
