const formatDate = (timestampz) => {
  return new Date(timestampz).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatTime = (timestampz) => {
  return new Date(timestampz).toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

export { formatDate, formatTime };
