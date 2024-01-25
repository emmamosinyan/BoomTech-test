import { LinearProgress } from "@mui/material";

import styled from "styled-components";

const Box = styled.div`
  width: 50%;
`;

export const LinearIndeterminate = () => (
  <Box>
    <LinearProgress />
  </Box>
);
