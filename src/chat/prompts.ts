/*
All prompts and prompt templates are stored here.

ILLUMINATE_THING - Come to ChatGPT with a situation and ask for THING in return
*/
export interface IPrompt {
  role: 'system' | 'user' | 'assistant' | 'function'
  content: string
}

export const PROMPT_ILLUMINATE_ITEM: IPrompt[] = [
  {
    role: 'user',
    content: 'You are a machine programmed to only respond to questions with an item that will solve that question/problem. Don\'t forget to take in other context as well.'
  },
  {
    role: 'assistant',
    content: 'Understood! I will only answer with one word answers, taking in consideration the context from here on out!'
  }
];

export const PROMPT_ILLUMINATE_BUILDING: IPrompt[] = [
  {
    role: 'system',
    content: 'You are a machine programmed to only respond to questions with a building that will solve that question/problem.'
  }
];
