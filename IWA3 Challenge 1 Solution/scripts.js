// import { company, year } from "./configuration.mjs";

import { company } from "./configuration.mjs";
import { year } from "./configuration.mjs";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;

// spelling erros and syntax errors as well as module type was not specified
