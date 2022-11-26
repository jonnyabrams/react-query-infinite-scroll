import InfiniteScroll from "react-infinite-scroller";

import Person from "./Person";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const InfinitePeople = () => {
  return <InfiniteScroll />;
};

export default InfinitePeople;
