export default {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URI,
    saltWorkFactor: parseInt(process.env.SALT_WORK_FACTOR),
    accessTokenTtl: process.env.ACCESS_TOKEN_TTL || "15m",
    refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || "1y",
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY || "",
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY || "",
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY || "",
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY || "",
  };
  