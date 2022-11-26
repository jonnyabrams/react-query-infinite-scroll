import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from "react";

import "./App.css";
import InfinitePeople from "./people/InfinitePeople";
import InfiniteSpecies from "./species/InfiniteSpecies";

const queryClient = new QueryClient();

const App = () => {
  const [showPeople, setShowPeople] = useState(false)
  const [showSpecies, setShowSpecies] = useState(false)

  const handleShowPeople = () => {
    setShowSpecies(false)
    setShowPeople(true)
  }

  const handleShowSpecies = () => {
    setShowPeople(false)
    setShowSpecies(true)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <div className="buttons">
          <button onClick={handleShowPeople}>People</button>
          <button onClick={handleShowSpecies}>Species</button>
        </div>
        {showPeople && <InfinitePeople />}
        {showSpecies && <InfiniteSpecies />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
