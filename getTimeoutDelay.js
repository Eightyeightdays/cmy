import { totalSquares, transitionLength } from "./globals.js";
import { delay } from "./createGrid.js";
import {delayIncrement} from "./getDelayIncrement.js";

// determine timeout duration in milliseconds based on total animation runtime
export var timeoutDelay = ((((totalSquares -1) * delayIncrement) + delay) + transitionLength) * 1000;
