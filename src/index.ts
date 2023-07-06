require('tsconfig-paths/register');
import { update } from "@engine/engine";

const MAX_TICKS = 4
const TICK_LENGTH = 1000 / 1;

let gameTicks = 0;

let prevTick = Date.now();
let nextTickReady = true;
const loop = async () => {
  const now = Date.now();

  if (prevTick + TICK_LENGTH <= now) {
    const delta = (now - prevTick); // Keeping this around for performance checking later
    prevTick = now;

    if (nextTickReady) {
      nextTickReady = false;
      await update();
      // console.log(delta);
      nextTickReady = true;
    }
    gameTicks++;
  }

  if (gameTicks < MAX_TICKS) {
    setImmediate(loop);
  }
}

loop();