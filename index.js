const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

const functionError = (val) => {
  if (typeof val === "number") {
    return val;
  }
  throw new Error("mensaje de error personalizado");
};

try {
  const tryError = functionError("a");
  console.log(tryError);
  console.log("esta ejecutandose de manera correcta");
} catch (e) {
  logger.error("ERROR!");
  logger.error(`el error es ${e}`);
} finally {
  console.log("funcion terminada");
}
