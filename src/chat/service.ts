/* 
Send APi requests to OpenAI
*/
import axios from 'axios';
import { IPrompt, PROMPT_ILLUMINATE_ITEM } from './prompts';

import { OPENAI_API_KEY } from '@config/constants';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'gpt-3.5-turbo';

const reqConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`
  }
}

export const sendSimpleRequest = async (messages: IPrompt[]) => {
  const body = {
    temperature: 1,
    top_p: 1,
    messages,
    model: MODEL
  }

  const res = await axios.post(OPENAI_URL, body, reqConfig);

  return res;
}

export const askForItem = async (question: string) => {
  const messages: IPrompt[] = [
    ...PROMPT_ILLUMINATE_ITEM,
    {
      role: 'user',
      content: question
    }
  ]

  const body = {
    temperature: 1,
    top_p: 1,
    messages,
    model: MODEL
  }

  const res = await axios.post(OPENAI_URL, body, reqConfig);

  return res.data;
}