const getEnvVar = (key: string) => {
  if(import.meta.env[key] === undefined) {
    throw new Error(`env variable ${key} is required`);
  }
  return import.meta.env[key];
};

export const BASE_URL = getEnvVar('VITE_BACKEND_URL');
