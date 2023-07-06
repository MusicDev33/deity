import dotenv from 'dotenv';
dotenv.config();

const dotenvCheck = (property: string | undefined): string => {
  if (!property) {
    throw new Error(`dotenv check failed on property`);
  }

  return property;
}

export const PORT = dotenvCheck(process.env.PORT);
export const OPENAI_API_KEY = dotenvCheck(process.env.OPENAI_API_KEY);

// Make sure dangerous defaults crash the program.
if (!OPENAI_API_KEY) {
  console.log('This program requires an OpenAI key.');
  process.exit(1);
}
