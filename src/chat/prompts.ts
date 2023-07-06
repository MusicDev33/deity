/*
All prompts and prompt templates are stored here.

ILLUMINATE_THING - Come to ChatGPT with a situation and ask for THING in return
*/
interface IPrompt {
  role: 'system' | 'user' | 'assistant' | 'function'
  content: string
}

const PROMPT_ILLUMINATE_ITEM: IPrompt[] = [
  {
    role: 'system',
    content: 'You are a machine programmed to only respond to questions with an item that will solve that question/problem.'
  }
];

const PROMPT_ILLUMINATE_BUILDING: IPrompt[] = [
  {
    role: 'system',
    content: 'You are a machine programmed to only respond to questions with a building that will solve that question/problem.'
  }
];
