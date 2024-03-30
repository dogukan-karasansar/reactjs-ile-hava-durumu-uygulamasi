export const errorMessageHandle = (error) => {
  switch (error) {
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 408:
      return "Request Timeout";
    case 429:
      return "Too Many Requests";
    case 503:
      return "Service Unavailable";
    case 504:
      return "Gateway Timeout";
    default:
      return "Something went wrong";
      break;
  }
};

export const selectOptionsFormatter = async (data) => {
  if (data.length < 1) return [];

  const options = await Promise.all(
    data.map(async (item) => {
      return {
        value: item.name,
        label: item.name + ", " + item.country,
      };
    })
  );

  return options;
};
