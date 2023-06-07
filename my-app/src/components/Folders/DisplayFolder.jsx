import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import FolderIcon from '@mui/icons-material/Folder';
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
function DisplayFolder() {
  return (
    <Box display={"flex"} alignItems={"center"} border={"2px solid black"} width={200} height={50}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} />
      </FormGroup>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={"name"} />
    </Box>
  );
}

export default DisplayFolder;
