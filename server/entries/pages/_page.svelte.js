import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css = {
  code: "main.svelte-1cyqnmo{text-align:center;padding:50px;font-family:Arial, sans-serif}select.svelte-1cyqnmo{padding:10px;font-size:16px;margin-top:20px}p.svelte-1cyqnmo{margin-top:20px;font-size:18px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from '$app/navigation';\\n\\timport { onMount } from 'svelte';\\n\\n\\tlet tournaments = ['all', 'college', 'teens', 'celebrity'];\\n\\tlet selectedTournament = tournaments[0];\\n\\n\\tlet episodes = [];\\n\\tlet episodeNumber = 1;\\n\\n\\t// Function to load the appropriate JSON file based on the selected tournament\\n\\t/**\\n\\t * @param {string} tournament\\n\\t */\\n\\tasync function loadTournament(tournament) {\\n\\t\\ttry {\\n\\t\\t\\tconst response = await fetch(\`episodes/\${tournament}.json\`);\\n\\t\\t\\tif (!response.ok) {\\n\\t\\t\\t\\tthrow new Error('Network response was not ok');\\n\\t\\t\\t}\\n\\t\\t\\tconst jsonData = await response.json();\\n\\t\\t\\tepisodes = jsonData;\\n\\t\\t} catch (error) {\\n\\t\\t\\tconsole.error('Error loading JSON data:', error);\\n\\t\\t}\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tloadTournament(selectedTournament);\\n\\t});\\n\\n\\t// Watch for changes to the selectedTournament and load the new data\\n\\t$: if (selectedTournament) {\\n\\t\\tloadTournament(selectedTournament);\\n\\t\\tepisodeNumber = 1;\\n\\t}\\n<\/script>\\n\\n<main>\\n\\t<h1>Jeopardy Setup</h1>\\n\\t<select bind:value={selectedTournament}>\\n\\t\\t{#each tournaments as tournament}\\n\\t\\t\\t<option value={tournament}>{tournament}</option>\\n\\t\\t{/each}\\n\\t</select>\\n\\n\\t<p>You selected: {selectedTournament}</p>\\n\\t<p>Number of episodes: {episodes.length}</p>\\n\\t<select bind:value={episodeNumber}>\\n\\t\\t{#each episodes as e, i}\\n\\t\\t\\t<option value={i + 1}>{i + 1}</option>\\n\\t\\t{/each}\\n\\t</select>\\n\\t{#if episodes.length}\\n\\t\\t<p>Episode Title: {episodes[episodeNumber - 1].info.title}</p>\\n\\t{/if}\\n\\t<button on:click={() => goto(\`/\${selectedTournament}/\${episodeNumber}\`)}> PLAY </button>\\n</main>\\n\\n<style>\\n\\tmain {\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 50px;\\n\\t\\tfont-family: Arial, sans-serif;\\n\\t}\\n\\n\\tselect {\\n\\t\\tpadding: 10px;\\n\\t\\tfont-size: 16px;\\n\\t\\tmargin-top: 20px;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin-top: 20px;\\n\\t\\tfont-size: 18px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4DC,mBAAK,CACJ,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,KAAK,CAAC,CAAC,UACrB,CAEA,qBAAO,CACN,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACb,CAEA,gBAAE,CACD,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IACZ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tournaments = ["all", "college", "teens", "celebrity"];
  let selectedTournament = tournaments[0];
  let episodes = [];
  let episodeNumber = 1;
  async function loadTournament(tournament) {
    try {
      const response = await fetch(`episodes/${tournament}.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      episodes = jsonData;
    } catch (error) {
      console.error("Error loading JSON data:", error);
    }
  }
  $$result.css.add(css);
  {
    if (selectedTournament) {
      loadTournament(selectedTournament);
      episodeNumber = 1;
    }
  }
  return `<main class="svelte-1cyqnmo"><h1 data-svelte-h="svelte-d4awp7">Jeopardy Setup</h1> <select class="svelte-1cyqnmo">${each(tournaments, (tournament) => {
    return `<option${add_attribute("value", tournament, 0)}>${escape(tournament)}</option>`;
  })}</select> <p class="svelte-1cyqnmo">You selected: ${escape(selectedTournament)}</p> <p class="svelte-1cyqnmo">Number of episodes: ${escape(episodes.length)}</p> <select class="svelte-1cyqnmo">${each(episodes, (e, i) => {
    return `<option${add_attribute("value", i + 1, 0)}>${escape(i + 1)}</option>`;
  })}</select> ${episodes.length ? `<p class="svelte-1cyqnmo">Episode Title: ${escape(episodes[episodeNumber - 1].info.title)}</p>` : ``} <button data-svelte-h="svelte-3ln4dk">PLAY</button> </main>`;
});
export {
  Page as default
};
