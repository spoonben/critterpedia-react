module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isProd = process.env.NODE_ENV === "production";

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [!isProd && "react-refresh/babel"].filter(Boolean),
  };
};
