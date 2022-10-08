import { envConfig } from "./environment.config";
//process.env.NODE_ENV => You cannot override NODE_ENV manually.
//npm start => it is always equal to 'development';
//npm test => it is always equal to 'test';
//npm run build => it is always equal to 'production'
const isProducion = process.env.NODE_ENV === "production" ? true : false;

export const ENVRONMENT = {
  ...envConfig(),
  production: isProducion,
  env: process.env.NODE_ENV,

};
