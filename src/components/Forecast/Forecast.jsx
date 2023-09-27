import {
    IconCloudRain,
    IconTemperature,
    IconTemperatureCelsius
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { Tooltip } from "react-tooltip";
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
            <div key={daily.dt}>
              <div
                className="bg-white rounded-xl flex flex-col items-center dark:bg-blue-950 p-2"
                data-tooltip-id="my-tooltip"
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
                <div className="font-semibold text-neutral-500 dark:text-white">
                  {date}
                </div>
                <div className="flex font-black text-neutral-600 text-2xl dark:text-white">
                  {(
                    (daily?.feels_like?.day +
                      daily?.feels_like?.eve +
                      daily?.feels_like?.morn +
                      daily?.feels_like?.night) /
                    4
                  ).toFixed(2)}
                  <IconTemperatureCelsius stroke={1.5} />{" "}
                </div>
              </div>

              <Tooltip id="my-tooltip">
                <div className="flex flex-col gap-2 w-36">
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      Max <IconTemperature stroke={1.5} size={16} />
                    </span>
                    <span className="flex">
                      {daily?.temp?.max}{" "}
                      <IconTemperatureCelsius stroke={1.5} size={16} />{" "}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      Min <IconTemperature stroke={1.5} size={16} />
                    </span>
                    <span className="flex">
                      {daily?.temp?.min}{" "}
                      <IconTemperatureCelsius stroke={1.5} size={16} />{" "}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center">
                      Rain <IconCloudRain stroke={1.5} size={16} className="ml-1" />
                    </span>
                    <span className="flex">{daily?.temp?.min} mm</span>
                  </div>
                </div>
              </Tooltip>
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
