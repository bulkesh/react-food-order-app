import { getDomain, getEnvronmentDomain } from "./environment.utils";

let domainPrefix = getDomain();
console.log("domainPrefix: " ,domainPrefix);
const _envConfig = {
  /*
        config for local host.
        set all the base urls for every api which are used in app.
        You can set API, Assets bas URL and other app config like client IDs, API ids
    */
  apibaseUrl: "https://food-order-c3f16-default-rtdb.firebaseio.com/",
};

if (domainPrefix === "_test") {
  /*
        config for test envronment.
        set all the base urls for every api which are used in app.
        You can set API, Assets bas URL and other app config like client IDs, API ids
    */
  _envConfig.apibaseUrl = "https://food-order-c3f16-default-rtdb.firebaseio.com/";
} else if (domainPrefix === "_prod") {
  /*
        config for Prod envronment.
        set all the base urls for every api which are used in app.
        You can set API, Assets bas URL and other app config like client IDs, API ids
    */
  _envConfig.apibaseUrl = "https://food-order-c3f16-default-rtdb.firebaseio.com/";
}

export const envConfig = () => {
  const envDomain = getEnvronmentDomain();
  console.log("envDomain: " ,envDomain);
  const config = {
    domain: "http://localhost:3000/",
    apiUrl: "https://food-order-c3f16-default-rtdb.firebaseio.com/",
    icons: "./assets/icons/",
    images: "./assets/images/",
    logo: "./assets/logo/",
  };

  // For all other envronment expect local
  if (envDomain !== "local") {
    config.domain = `https://${envDomain}/`;
    config.apiUrl = `https://food-order-c3f16-default-rtdb.firebaseio.com/`;
    config.icons = `https://assets.${envDomain}/icons/`;
    config.images = `https://assets.${envDomain}/images/`;
    config.logo = `https://assets${envDomain}/logo/`;
  }

  return {
    ..._envConfig,
    ...config,
  };
};
