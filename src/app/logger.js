// logger.js
const winston = require("winston");
const { combine, timestamp, printf, json, colorize } = winston.format;

// Định dạng log (tùy chỉnh)
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Tạo logger
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug", // Level log
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Thêm timestamp
    colorize(), // Thêm màu sắc (cho console)
    json(), // Định dạng JSON
    logFormat // Định dạng tùy chỉnh
  ),
  transports: [
    new winston.transports.Console(), // Log ra console
    new winston.transports.File({
      filename: "logs/combined.log",
      level: "info",
    }), // Log ra file combined.log (info +)
    new winston.transports.File({ filename: "logs/error.log", level: "error" }), // Log ra file error.log (chỉ lỗi)
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "logs/rejections.log" }),
  ],
});

module.exports = logger;
