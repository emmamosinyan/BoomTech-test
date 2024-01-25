import { createContext, useState } from "react";

import { DUMMY_SONGS } from "../dummy-songs";

export const SongsContext = createContext({
  songs: [],
  addSongToList: () => {},
});

// Functional component for providing context related to songs.
export const SongsContextProvider = ({ children }) => {
  const [songList, setSongList] = useState(DUMMY_SONGS);

  //song is an object that contains all the needed info about the song
  const handleAddSongToList = (song) => {
    setSongList((prevList) => [
      ...prevList,
      { ...song, trackNumber: prevList.length + 1 },
    ]);
  };

  // Context value containing the list of songs and function to add a song to the list.
  const ctxValue = {
    songs: songList,
    addSongToList: handleAddSongToList,
  };

  // Provides the context value to its children components.
  return (
    <SongsContext.Provider value={ctxValue}>{children}</SongsContext.Provider>
  );
};
