/* 
Send APi requests to OpenAI
*/
import axios from 'axios';

import { OPENAI_API_KEY } from '@config/constants';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'

const header = {
  'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`
}

const sendSimpleRequest = () => {
  
}
