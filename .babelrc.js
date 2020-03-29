module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const config = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [!api.env("production") && "react-refresh/babel"].filter(Boolean),
  };
  console.log("BABEL CONFIG", api.env("production"), config);
  return config;
};
