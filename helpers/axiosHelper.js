import axios from "axios";
const rootApiEp = "http://localhost:8000/api/v1";
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//post new user
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/students",
    data,
  };
  apiProcessor(obj);
};
