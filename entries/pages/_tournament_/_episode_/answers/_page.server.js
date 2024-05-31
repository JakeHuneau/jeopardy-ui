async function load({ fetch, params }) {
  const res = await fetch(`/episodes/${params.tournament}.json`);
  const episodes = await res.json();
  const episode = episodes[params.episode - 1];
  return {
    episode
  };
}
export {
  load
};
