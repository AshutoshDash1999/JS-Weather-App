import useStore from "../store/useStore";
import owmApi from "./owmApi";

const { setError } = useStore.getState();

export default async function fetchData(url) {
  try {
    const response = await owmApi.get(
      `${url}&units=metric&appid=${process.env.REACT_APP_APP_ID}`
    );
    setError(false);

    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
    setError(true);
  }
}
