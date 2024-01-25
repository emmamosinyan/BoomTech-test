import { useState, useContext } from "react";

import styled from "styled-components";

import { LinearIndeterminate } from "./LinearIndeterminate";
import { SongsContext } from "../store";
import { isFileAccepted } from "../utils";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  cursor: pointer;
  border-radius: 4px;
  background: #2c77ac;
  padding: 8px 12px;
  color: #fff;
  font-weight: 500;
`;

const FileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  ${({ isLoading }) => (isLoading ? "cursor: not-allowed;" : "")}
`;

const MockLoader = styled.div`
  background-color: #f1f1f1;
  height: 20px;
  width: 0;
  margin-top: 10px;
  transition: width 0.3s ease;
`;


export const MusicUploadForm = () => {
  // Destructuring 'addSongToList' function from the 'SongsContext' using useContext hook.
  const { addSongToList } = useContext(SongsContext);
  // Declaring state variable 'musicFile', which represents the selected music file for upload,
  // and its updater function 'setMusicFile' using useState hook.
  const [musicFile, setMusicFile] = useState({ file: null });

  // Declaring state variable 'isLoading', whcih indicates whether the file upload process is currently in progress,
  // and its updater function 'setIsLoading' using useState hook.
  const [isLoading, setIsLoading] = useState(false);

  //Function that handles the file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsLoading(true);

      // Simulate network latency with a timeout
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    const acceptedFile = isFileAccepted(file);
    console.log(file, 'file');

    if (!acceptedFile) {
      console.log('Wrong Format!!');

      return;
    }

    // Updates the 'musicFile' state with the selected music file.
    setMusicFile({ file });
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    // Prevents the default to avoid page reload.
    e.preventDefault();

    if (musicFile.file.name) {
      // Extracts artist name and song name from the selected file name.
      const [artistName, songName] = musicFile.file.name
        .replaceAll(".mp3", "")
        .replaceAll(".wav")
        .split(" - ");
      // Adds the extracted artist and song names to the song list
      addSongToList({ artistName, songName });
      // Resets the 'musicFile' state to null after adding the song.
      setMusicFile({ file: null });
    }

    console.log("Submitting...", { musicFile });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {isLoading ? (
        <>
          <MockLoader />
          <LinearIndeterminate />
        </>
      ) : (
        <Label htmlFor="music-file-upload">
          {/* Conditional rendering to display the name of the selected music file if available */}
          {musicFile.file ? musicFile.file.name : "Upload Music File"}
        </Label>
      )}

      <FileInput
        id="music-file-upload"
        type="file"
        onChange={handleFileChange}
        accept="audio/*"
      />

      {musicFile.file && (
        <SubmitButton type="submit" disabled={isLoading}>
          Add to playlist
        </SubmitButton>
      )}
    </FormContainer>
  );
};
