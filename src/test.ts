require('tsconfig-paths/register');
import { askForItem } from "chat/service";

const scenarios = [
  'I am hungry, but I\'m currently near an ocean.',
  `I need to build a house and I'm in a forest.`,
  `I have chopped down a tree, but I need to build a house with the wood.`
]

const main = async () => {
  const data = await askForItem('I need to build a house and I\'m in a forest.');
  console.log(data.choices);
}

main();
