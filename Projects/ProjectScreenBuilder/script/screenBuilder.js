import { createElement } from "./createElement.js";
import { save } from "./saveElement.js";
import { load, loadElements } from "./loadElements.js";
import { clearScreen } from "./clearScreen.js";

load()
document.querySelector('.btn_doIt').addEventListener('click', createElement);
document.querySelector('.btn_save').addEventListener('click', save);
document.querySelector('.btn_load').addEventListener('click', loadElements);
document.querySelector('.btn_clear').addEventListener('click', clearScreen);






