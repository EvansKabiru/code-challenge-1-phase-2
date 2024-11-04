import React, { useState } from "react";
import hogs from "./porker_data";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSortForm from "./FilterSortForm";
import AddHogForm from "./AddHogForm";

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const filteredAndSortedHogs = hogData
    .filter(hog => (greasedFilter ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  const addNewHog = newHog => setHogData([...hogData, newHog]);

  return (
    <div className="ui grid container">
      <Nav />
      <FilterSortForm
        greasedFilter={greasedFilter}
        setGreasedFilter={setGreasedFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <AddHogForm addNewHog={addNewHog} />
      <HogList hogs={filteredAndSortedHogs} />
    </div>
  );
}

export default App;

