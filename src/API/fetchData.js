import owmApi from "./owmApi";

export default async function fetchData(url) {
  try {
    const response = await owmApi.get(`${url}&units=metric&appid=${process.env.REACT_APP_APP_ID}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
