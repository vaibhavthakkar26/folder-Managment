import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const MainContainer = styled(Box)`
    display: flex;
    max-width : 1440px;
    margin : 0 auto;
`;

export const RightSideContainer = styled(Box)`
    flex: 1;
`;

export const RightNavBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 10.4px;
`; 

export const SearchBarBox = styled(Box)`
    display: flex;
    gap: 12px;
`;

export const FolderWrapper = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 19.2px;
`;

export const FolderBox = styled(Box)`
    display: flex;
    align-items: center;
    border: 2px solid black;
    padding: 20px;
    height: auto;
`;

export const FolderNameBox = styled(Box)`
    display: flex;
    text-align: center;
    align-items: center;
`;

export const CssModalBox = styled(Box)`
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
`;