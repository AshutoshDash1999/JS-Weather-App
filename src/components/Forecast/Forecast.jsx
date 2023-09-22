import { IconTemperatureCelsius } from "@tabler/icons-react";
import dayjs from "dayjs";
import useStore from "../../store/useStore";
import { showWeatherIcon } from "../../utils/utils";

const Forecast = () => {
  const { forecastData } = useStore();

  return (
    <section className="my-4 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-4">
      {forecastData?.map((daily, index) => {
        const date = dayjs.unix(daily?.dt).local().format("DD MMM, ddd");
        if (index !== 0) {
          return (
            <div
              className="bg-white rounded-xl flex flex-col items-center dark:bg-blue-950 p-2"
              key={daily.dt}
            >
              <div className="flex justify-center p-2 h-24">
                <img
                  src={showWeatherIcon(daily?.weather[0].main)}
                  alt="weather icon"
                  height={100}
                  width={100}
                  className="object-contain"
                />
              </div>
              <div className="font-semibold text-neutral-500 dark:text-white">{date}</div>
              <div className="flex font-black text-neutral-600 text-2xl dark:text-white">
                {((daily?.feels_like?.day +
                  daily?.feels_like?.eve +
                  daily?.feels_like?.morn +
                  daily?.feels_like?.night) /
                  4).toFixed(2)}
                <IconTemperatureCelsius stroke={1.5} />{" "}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </section>
  );
};
export default Forecast;
