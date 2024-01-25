import styled from "styled-components";

import { PictureButton } from "./PictureButton";

//creation of styeled components
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Td = styled.td`
  padding: 6px;
  vertical-align: middle;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #737373;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Functional component for rendering song row based on the data passed by the song property,where first an

export const SongRow = ({ song }) => (
  <Tr>
    {/* Cell with a picture button for playing the song. */}
    <Td>
      <PictureButton src="/play-icon.svg" />
    </Td>
    {/* Cells that display the song info*/}
    <Td>{song.songName}</Td>
    <Td>{song.artistName}</Td>
    <Td>{song.trackNumber}</Td>
    {/* Cell containing buttons for additional actions like favorite, check, and share. */}
    <Td>
      {/* Wrapper for aligning the buttons. */}
      <ButtonWrapper>
        <PictureButton src="/heart-icon.svg" alt="heart" />
        <PictureButton src="/check-icon.svg" alt="check" />
        <PictureButton src="/share-icon.svg" alt="check" />
      </ButtonWrapper>
    </Td>
  </Tr>
);
