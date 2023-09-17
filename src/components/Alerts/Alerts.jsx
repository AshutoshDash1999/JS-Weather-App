import dayjs from "dayjs";
import useStore from "../../store/useStore";

const Alerts = () => {
  const { alertData } = useStore();
  return (
    <section className="bg-white p-4 px-8 rounded-xl mb-4">
      <h3 className="font-bold text-xl text-neutral-500 my-3">Alerts</h3>

      <div className="flex flex-col gap-4">
        {alertData?.map((alert, index) => {
          return (
            <div key={index} className="bg-red-50 rounded-xl p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <span className="text-red-500 font-black text-xl">{alert?.event}</span>
                <span className="italic font-bold text-neutral-400">-  {alert?.sender_name}</span>
              </div>
              <div className="flex gap-2 font-bold text-neutral-400">
                <span className="">
                    {dayjs.unix(alert?.start).local().format("DD MMM hh:mm A")}
                </span>
                <span>to</span>
                <span className="">
                    {dayjs.unix(alert?.end).local().format("DD MMM hh:mm A")}
                </span>
              </div>
              <p className="text-neutral-700 font-semibold text-sm mt-1">{alert?.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Alerts;
