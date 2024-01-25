import { MusicUploadForm, SongList, Header } from "./components";

import { SongsContextProvider } from "./store";

import "./App.css";

function App() {
  return (
    <SongsContextProvider>
      <Header />
      <SongList />
      <MusicUploadForm />
    </SongsContextProvider>
  );
}

export default App;
