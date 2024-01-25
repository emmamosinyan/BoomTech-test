import { useContext } from "react";
import styled from "styled-components";

import { SongRow } from "./SongRow";
import { SongsContext } from "../store";

//creation of the styled components

const Table = styled.table`
  width: 100%;
  padding: 5px;
  margin: 10px auto;
  border-collapse: collapse;
`;

const Th = styled.th`
  height: 40px;
  width: ${(props) => props.size};
  background-color: #f4f6f6;
  color: #566573;
`;

// Functional component for rendering the song list
export const SongList = () => {
  //Accessing the 'songs' state from the SongsContext using useContext hook.
  // 'songs' variable now holds the state value obtained from the context, allowing us to use it within the component.
  const { songs } = useContext(SongsContext);

  return (
    <Table>
      <thead>
        {/*Table row representing table header with column names. Each <Th> component defines a column in the table.*/}
        <tr>
          <Th size="7%"></Th>
          <Th>Song Name</Th>
          <Th>Artist Name</Th>
          <Th size="10%">Track</Th>
          <Th size="18%"></Th>
        </tr>
      </thead>
      {/* 
  Table body containing rows of songs mapped from the 'songs' array.
    'songs.map()' iterates over each song object in the 'songs' array.
    Each song object is passed as a prop to the 'SongRow' component.
   'key' prop is set to the 'trackNumber' of each song for efficient rendering.
*/}
      <tbody>
        {songs.map((song) => (
          <SongRow key={song.trackNumber} song={song} />
        ))}
      </tbody>
    </Table>
  );
};
