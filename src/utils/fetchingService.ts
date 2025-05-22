import axios from "axios";

type FetchingResult<T> = {
  success: true,
  status: 200,
  data: T,
} | {
  success: false,
  status: number,
  message: string,
}

export class FetchingService {
  static async AxiosFetching<T>(apiPath: string) : Promise<FetchingResult<T>> {
    try {
      const axiosResult = await axios.get(apiPath);
      return {
        success: true,
        status: 200,
        data: axiosResult.data,
      };
    } catch(error) {
      if(axios.isAxiosError(error)) {
        console.log(error);
        return {
          success: false,
          status: 400,
          message: error.message
        }
      }

      // not an error from API for some reason...
      return {
        success: false,
        status: 400,
        message: "Unknown error..."
      };
    }
  }

  DefaultFetching = async (apiPath: string) => {
    const fetchResult = await fetch(apiPath);
  
    return fetchResult.json();
  }
}
