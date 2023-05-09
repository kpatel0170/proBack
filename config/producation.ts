export default {
    port: process.env.PORT || 5000,
    MetricsPORT: process.env.METRICS_PORT || 1901,
    dbUri: process.env.DB_URI,
    saltWorkFactor: process.env.SALT_WORK_FACTOR || 10,
    accessTokenTtl: process.env.ACCESS_TOKEN_TTL || "15m",
    refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || "1y",
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY || "",
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY || "",
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY || "",
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY || "",
};
  