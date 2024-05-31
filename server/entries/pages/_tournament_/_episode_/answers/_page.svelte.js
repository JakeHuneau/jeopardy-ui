import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Category } from "../../../../../chunks/FinalJeopardy.svelte_svelte_type_style_lang.js";
const css = {
  code: ".header.svelte-16cdipq{display:flex;flex-direction:row}.page.svelte-16cdipq{display:flex;flex-direction:column}p.svelte-16cdipq{text-align:center;width:100%}.categories.svelte-16cdipq{display:grid;grid-template-columns:repeat(6, 1fr);gap:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Category from \'../Category.svelte\';\\n\\timport FinalJeopardy from \'../FinalJeopardy.svelte\';\\n\\n\\texport let data;\\n\\tlet mode = 0; // 0 = single jeopardy, 1 = double jeopardy, 2 = Final jeopardy\\n\\tlet startIndex = 0;\\n\\tlet endIndex = 6;\\n\\n\\t// Reactive statement to update the categories to display based on startIndex and endIndex\\n\\t$: displayedCategories = data.episode.categories.slice(startIndex, endIndex);\\n\\n\\tfunction switchMode() {\\n\\t\\tif (mode == 0) {\\n\\t\\t\\tmode = 1;\\n\\t\\t\\tstartIndex = 6;\\n\\t\\t\\tendIndex = 12;\\n\\t\\t} else if (mode == 1) {\\n\\t\\t\\tmode = 2;\\n\\t\\t\\tstartIndex = 0;\\n\\t\\t\\tendIndex = 6;\\n\\t\\t} else {\\n\\t\\t\\tmode = 0;\\n\\t\\t}\\n\\t\\tconsole.log(`${mode}, ${startIndex}, ${endIndex}`);\\n\\t}\\n<\/script>\\n\\n<div class=\\"page\\">\\n\\t<div class=\\"header\\">\\n\\t\\t<p>{data.episode.info.title} -- {data.episode.info.comment}</p>\\n\\t\\t<button on:click={switchMode}>\\n\\t\\t\\t{#if mode == 0}\\n\\t\\t\\t\\tDouble Jeopardy\\n\\t\\t\\t{:else if mode == 1}\\n\\t\\t\\t\\tFinal Jeopardy\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\tSingle Jeopardy\\n\\t\\t\\t{/if}\\n\\t\\t</button>\\n\\t</div>\\n\\t{#if mode < 2}\\n\\t\\t<div class=\\"categories\\">\\n\\t\\t\\t{#each displayedCategories as category}\\n\\t\\t\\t\\t<Category\\n\\t\\t\\t\\t\\tcategoryName={category.category_name}\\n\\t\\t\\t\\t\\tquestions={category.questions}\\n\\t\\t\\t\\t\\tisDouble={mode}\\n\\t\\t\\t\\t\\tshowAnswer={true}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t{:else}\\n\\t\\t<div class=\\"final\\">\\n\\t\\t\\t<FinalJeopardy\\n\\t\\t\\t\\tcategory={data.episode.categories[12].category_name}\\n\\t\\t\\t\\tquestion={data.episode.categories[12].questions[0].question}\\n\\t\\t\\t\\tanswer={data.episode.categories[12].questions[0].answer}\\n\\t\\t\\t\\tshowAnswer={true}\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.header {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t}\\n\\n\\t.page {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\tp {\\n\\t\\ttext-align: center; /* Ensures text within the <p> is centered */\\n\\t\\twidth: 100%; /* Makes the <p> take the full width of the container */\\n\\t}\\n\\n\\t.categories {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(6, 1fr); /* Adjust the number of columns as needed */\\n\\t\\tgap: 10px; /* Space between columns */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiEC,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GACjB,CAEA,oBAAM,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAEA,gBAAE,CACD,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACR,CAEA,0BAAY,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IACN"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayedCategories;
  let { data } = $$props;
  let mode = 0;
  let startIndex = 0;
  let endIndex = 6;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  displayedCategories = data.episode.categories.slice(startIndex, endIndex);
  return `<div class="page svelte-16cdipq"><div class="header svelte-16cdipq"><p class="svelte-16cdipq">${escape(data.episode.info.title)} -- ${escape(data.episode.info.comment)}</p> <button>${`Double Jeopardy`}</button></div> ${`<div class="categories svelte-16cdipq">${each(displayedCategories, (category) => {
    return `${validate_component(Category, "Category").$$render(
      $$result,
      {
        categoryName: category.category_name,
        questions: category.questions,
        isDouble: mode,
        showAnswer: true
      },
      {},
      {}
    )}`;
  })}</div>`} </div>`;
});
export {
  Page as default
};
