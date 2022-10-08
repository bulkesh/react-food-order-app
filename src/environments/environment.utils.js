const isLocalHost = (hostname) => hostname === "localhost";

export const getEnvronmentDomain = () => {
  console.log("hostname: " ,window.location.hostname);
  return isLocalHost(window.location.hostname) ? "local" : window.location.hostname;
}
 

export const getDomain = () => {
  let _domainPreFix = "_local";
  const domain = getEnvronmentDomain();

  if (domain === "dev.website_URL_dev") {
    _domainPreFix = "_dev";
  } else if (domain === "test.website_URL_test") {
    _domainPreFix = "_test";
  } else if (domain === "website_URL_prod") {
    _domainPreFix = "_prod";
  }

  return _domainPreFix;
};
