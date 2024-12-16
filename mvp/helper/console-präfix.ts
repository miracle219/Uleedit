export default function logPrefix(
  level: "info" | "warn" | "error" | "debug",
  prefix?: string,
): string {
  const currentTime = new Date().toLocaleTimeString();
  let levelStr = level.toUpperCase() + (prefix ? ` ${prefix}` : "");
  let colorCode: string;

  // Set the color code based on the log level
  switch (level) {
    case "info":
      colorCode = "\x1b[34m"; // Blue for info
      break;
    case "warn":
      colorCode = "\x1b[33m"; // Yellow for warning
      break;
    case "error":
      colorCode = "\x1b[31m"; // Red for error
      break;
    case "debug":
      colorCode = "\x1b[36m"; // Cyan for debug
      break;
    default:
      colorCode = "\x1b[0m"; // Reset color if no match
      break;
  }

  const resetCode = "\x1b[0m"; // Reset to default color and style
  const boldCode = "\x1b[1m"; // Bold text

  // Return the colored and styled prefix
  return `${boldCode}${colorCode}[${levelStr} ${currentTime}]${resetCode}`;
}
