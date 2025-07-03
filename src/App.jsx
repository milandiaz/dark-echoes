import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** Detailed information about the selected puppy */
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select a puppy to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h1>Episode {selectedEpisode.id}</h1>
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <button className="watchButton">Watch now</button>
      </section>
    );
  }

  /** List of puppies that a user can select from */
  function Roster() {
    return (
      <section className="roster">
        <h2>Episodes</h2>
        <ul className="roster">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark echoes</h1>
      </header>
      <main>
        <Roster />
        <EpisodeDetails />
      </main>
    </>
  );
}
