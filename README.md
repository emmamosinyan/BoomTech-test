# Code and Materials


This repository contains the source code and other extra information.


## An overview of the component structure

  **Header component**

 - Contains buttons and an input field that are created using styled
   components for styling purposes.
 - Enhances user experience by providing convenient access to essential
   action

**SongList component**

 - Responsible for the main body of the application which is the list of
   the songs.
 - Contains a table element created using styled components. This is
   responsible for the overall table structure and the table header.
 - Contains a sub component *SongRow* which is responsible for rendering
   every song row.

**SongRow component**
 - Responsible for rendering individual song details within *SongList*.
 - Takes that song data via properties.

**PictureButton component**

 - Responsible for rendering “clickable picture” buttons.
 - The pictures which we need to use in the button are given via
   properties

**MusicUploadForm component**

 - Responsible for the form that uploads a song and adds it to the
   *SongList*
 - Has an input element that only accepts audio types
 - Contains a sub component *LinearInderminate*

**LinearInderminate component**

 - Responsible for rendering a progress line that mocks the process of
   uploading a song.

## The state management approach


For global state management I used the Context API. Inside the songs-context I used the useState hook to manage the songList state.

It contains an array of objects, where each object contains information about the song, and addSongToList function, which is responsible for adding a song to the list by updating the songList state. The table is re-rendered when the songList changes.

I used local state management and context in *MusicUploadForm*.

 - musicFile state handles selected file for upload.
 - isLoading state is used to track whether the file upload process is
   currently in progress.
 - Manages songList state in songs-context through addSongToList method.

## Instructions on how to run the application locally.


To run this application locally please run those commands in the terminal.

 - npm install
   
 - npm run dev
 
 - npm install @mui/material @emotion/react @emotion/styled

## Any assumptions or additional features implemented.

For mocking a file upload process I assumed that the songs on the computer are kept in this format – ‘Artist Name – Song Name’. Based on this I got the Artist Name and Song Name based on the given fact that they are divided by the ‘-‘ symbol.

I also created dummy-songs js file, which contains 3 dummy songs so that the initial list does not look empty. This mocks the idea of already having some songs in the list.
