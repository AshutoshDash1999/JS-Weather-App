import useStore from "../../store/useStore";

const AirPollution = () => {
  const { airPollutionData } = useStore();

  console.log("airPollutionData", airPollutionData);
  return (
    <section className="bg-white p-4 px-8 rounded-xl my-2">
      <div className="flex justify-between">
        <span className="font-bold text-xl text-neutral-500">
          Air Quality Index
        </span>
        <span>{airPollutionData?.list[0].main.aqi}</span>
      </div>

      <div className="grid grid-cols-8 gap-4 my-4">
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.co}
          </span>
          <span className="font-semibold">CO</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.nh3}
          </span>
          <span className="font-semibold">NH3</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.no}
          </span>
          <span className="font-semibold">NO</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.no2}
          </span>
          <span className="font-semibold">NO2</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.o3}
          </span>
          <span className="font-semibold">O3</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.pm2_5}
          </span>
          <span className="font-semibold">PM 2.5</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.pm10}
          </span>
          <span className="font-semibold">PM10</span>
        </div>
        <div className="flex flex-col items-center bg-green-50 px-2 py-4 rounded-xl text-green-500">
          <span className="font-black text-xl">
            {airPollutionData?.list[0].components.so2}
          </span>
          <span className="font-semibold">SO2</span>
        </div>
      </div>
    </section>
  );
};
export default AirPollution;
