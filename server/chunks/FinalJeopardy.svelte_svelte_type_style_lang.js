import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "./ssr.js";
const css$1 = {
  code: "button.svelte-175w6i8{background-color:blue;height:6rem}.full-screen.svelte-175w6i8{position:fixed;top:0;left:0;width:100vw;height:100vh;font-size:xx-large}.active.svelte-175w6i8{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.answer.svelte-175w6i8{background-color:blue;height:6rem;color:gold}",
  map: `{"version":3,"file":"Question.svelte","sources":["Question.svelte"],"sourcesContent":["<script>\\n\\texport let price;\\n\\texport let question;\\n\\texport let answer;\\n\\texport let showAnswer = false;\\n\\tlet mode = 0; // 0 = price, 1 = question, 2 = blank, 3 = daily double\\n\\n\\t$: textColor = mode == 0 || mode == 3 ? 'gold' : 'white';\\n\\n\\t$: if (price) {\\n\\t\\t// Reset mode when new questions come\\n\\t\\tmode = 0;\\n\\t}\\n\\n\\tfunction switchMode() {\\n\\t\\tif (mode == 0) {\\n\\t\\t\\tif (Math.floor(Math.random() * 15) == 0) {\\n\\t\\t\\t\\t// 1/15 of DD\\n\\t\\t\\t\\tvar audio = new Audio('/daily_double.mp3');\\n\\t\\t\\t\\taudio.play();\\n\\n\\t\\t\\t\\tmode = 3;\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tmode = 1;\\n\\t\\t\\t}\\n\\t\\t} else if (mode == 1) {\\n\\t\\t\\tmode = 2;\\n\\t\\t} else if (mode == 3) {\\n\\t\\t\\tmode = 1;\\n\\t\\t} else {\\n\\t\\t\\t// Switch back to price\\n\\t\\t\\tmode = 0;\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n{#if showAnswer}\\n\\t<button class=\\"answer\\">\\n\\t\\t<div class=\\"price\\">\\n\\t\\t\\t\${price}\\n\\t\\t</div>\\n\\t\\t<div>\\n\\t\\t\\t{answer}\\n\\t\\t</div>\\n\\t</button>\\n{:else}\\n\\t<button\\n\\t\\tclass=\\"question {mode === 1 || mode === 3 ? 'full-screen' : ''}\\"\\n\\t\\tstyle=\\"color: {textColor}\\"\\n\\t\\ton:click={switchMode}\\n\\t>\\n\\t\\t{#if mode == 0}\\n\\t\\t\\t\${price}\\n\\t\\t{:else if mode == 1}\\n\\t\\t\\t<div class=\\"active\\">\\n\\t\\t\\t\\t{question}\\n\\t\\t\\t</div>\\n\\t\\t{:else if mode == 3}\\n\\t\\t\\t<div class=\\"active\\">DAILY DOUBLE</div>\\n\\t\\t{:else}\\n\\t\\t\\t<br />\\n\\t\\t{/if}\\n\\t</button>\\n{/if}\\n\\n<style>\\n\\tbutton {\\n\\t\\tbackground-color: blue;\\n\\t\\theight: 6rem;\\n\\t}\\n\\n\\t.full-screen {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tfont-size: xx-large;\\n\\t}\\n\\n\\t.active {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.answer {\\n\\t\\tbackground-color: blue;\\n\\t\\theight: 6rem;\\n\\t\\tcolor: gold;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkEC,qBAAO,CACN,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,IACT,CAEA,2BAAa,CACZ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,QACZ,CAEA,sBAAQ,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CAEA,sBAAQ,CACP,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACR"}`
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textColor;
  let { price } = $$props;
  let { question } = $$props;
  let { answer } = $$props;
  let { showAnswer = false } = $$props;
  let mode = 0;
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  if ($$props.showAnswer === void 0 && $$bindings.showAnswer && showAnswer !== void 0)
    $$bindings.showAnswer(showAnswer);
  $$result.css.add(css$1);
  {
    if (price) {
      mode = 0;
    }
  }
  textColor = mode == 0 || mode == 3 ? "gold" : "white";
  return `${showAnswer ? `<button class="answer svelte-175w6i8"><div class="price">$${escape(price)}</div> <div>${escape(answer)}</div></button>` : `<button class="${"question " + escape(mode === 1 || mode === 3 ? "full-screen" : "", true) + " svelte-175w6i8"}" style="${"color: " + escape(textColor, true)}">${mode == 0 ? `$${escape(price)}` : `${mode == 1 ? `<div class="active svelte-175w6i8">${escape(question)}</div>` : `${mode == 3 ? `<div class="active svelte-175w6i8" data-svelte-h="svelte-1ujc1ej">DAILY DOUBLE</div>` : `<br>`}`}`}</button>`}`;
});
const css = {
  code: ".category.svelte-remaj0{display:flex;flex-direction:column}.title.svelte-remaj0{text-align:center;background-color:blue;color:white;height:3rem;width:100%;display:flex;align-items:center;justify-content:center}.questions.svelte-remaj0{display:grid;grid-template-rows:repeat(5, 1fr);gap:10px;width:100%}",
  map: `{"version":3,"file":"Category.svelte","sources":["Category.svelte"],"sourcesContent":["<script>\\n\\timport Question from './Question.svelte';\\n\\texport let categoryName;\\n\\texport let questions;\\n\\texport let isDouble = 0;\\n\\texport let showAnswer = false;\\n<\/script>\\n\\n<div class=\\"category\\">\\n\\t<div class=\\"title\\">{categoryName}</div>\\n\\t<div class=\\"questions\\">\\n\\t\\t{#each questions as question, i}\\n\\t\\t\\t<Question\\n\\t\\t\\t\\tprice={(i + 1) * 100 * (isDouble + 1)}\\n\\t\\t\\t\\tquestion={question.question}\\n\\t\\t\\t\\tanswer={question.answer}\\n\\t\\t\\t\\t{showAnswer}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.category {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t.title {\\n\\t\\ttext-align: center; /* Ensures text within the <p> is centered */\\n\\t\\tbackground-color: blue;\\n\\t\\tcolor: white;\\n\\t\\theight: 3rem;\\n\\t\\twidth: 100%; /* Makes the <p> take the full width of the container */\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center; /* Centers the text vertically */\\n\\t\\tjustify-content: center; /* Optional: Centers the text horizontally */\\n\\t}\\n\\n\\t.questions {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-rows: repeat(5, 1fr); /* Adjust the number of rows as needed */\\n\\t\\tgap: 10px; /* Space between columns */\\n\\t\\twidth: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuBC,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAEA,oBAAO,CACN,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CAEA,wBAAW,CACV,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAClC,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IACR"}`
};
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categoryName } = $$props;
  let { questions } = $$props;
  let { isDouble = 0 } = $$props;
  let { showAnswer = false } = $$props;
  if ($$props.categoryName === void 0 && $$bindings.categoryName && categoryName !== void 0)
    $$bindings.categoryName(categoryName);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.isDouble === void 0 && $$bindings.isDouble && isDouble !== void 0)
    $$bindings.isDouble(isDouble);
  if ($$props.showAnswer === void 0 && $$bindings.showAnswer && showAnswer !== void 0)
    $$bindings.showAnswer(showAnswer);
  $$result.css.add(css);
  return `<div class="category svelte-remaj0"><div class="title svelte-remaj0">${escape(categoryName)}</div> <div class="questions svelte-remaj0">${each(questions, (question, i) => {
    return `${validate_component(Question, "Question").$$render(
      $$result,
      {
        price: (i + 1) * 100 * (isDouble + 1),
        question: question.question,
        answer: question.answer,
        showAnswer
      },
      {},
      {}
    )}`;
  })}</div> </div>`;
});
export {
  Category as C
};
