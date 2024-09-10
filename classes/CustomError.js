// Format timestamp to MM-DD-YYYY HH:mm:ss AM/PM
const formattedTimestamp = new Date().toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
});

class CustomError extends Error {
      constructor(message = "none added", statusCode = "none added", details = "none added", originalStack = "") {
            super(message);
            this.statusCode = statusCode;
            this.details = details;
            this.name = this.constructor.name;

            // Capture the stack trace (if you need to preserve the error location)
            Error.captureStackTrace(this, this.constructor);
      }

      getAllCustomErrorData() {
            return {
                  timestamp: formattedTimestamp,

                  message: this.message,
                  statusCode: this.statusCode,
                  name: this.name,
                  details: this.details,
            };
      }
}

module.exports = CustomError;
