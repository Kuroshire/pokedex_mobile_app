import axios from "axios";

// --- Fetching Util Function ---
export const DefaultFetching = async (apiPath: string) => {
  const fetchResult = await fetch(apiPath);

  return fetchResult.json();
}

export const AxiosFetching = async (apiPath: string) => {
  const axiosResult = await axios.get(apiPath);

  return axiosResult.data;
}