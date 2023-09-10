import { IconMoon, IconSun, IconSunset2 } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const DateTime = () => {
  const [greetText, setGreetText] = useState("");
  const [greetIcon, setGreetIcon] = useState(null);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const greetWithIcon = (currentTime = dayjs().format("HH")) => {
    if (currentTime >= 12 && currentTime < 17) {
      setGreetText("Good Afternoon");
      setGreetIcon(<IconSunset2 size={30} />);
    } else if (currentTime >= 5 && currentTime < 12) {
      setGreetText("Good Morning");
      setGreetIcon(<IconSun size={30} />);
    } else {
      setGreetText("Good Evening");
      setGreetIcon(<IconMoon size={30} />);
    }
  };

  // change greet message, icon and time and date
  useEffect(() => {
    var greeter = setInterval(() => {
      setTime();
      setDate(dayjs().format("dddd, DD MMMM, YYYY"));
      setTime(dayjs().format("hh:mm A"));
      greetWithIcon();
    }, 1000);

    return () => {
      clearInterval(greeter);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-5xl text-blue-500">
        {time}
      </div>
      <div className="font-bold text-2xl">
        {date}
      </div>
      <div className="text-blue-500 flex items-center font-semibold text-2xl gap-1 my-2">
        {greetIcon}
        {greetText} !
      </div>
    </div>
  );
};
export default DateTime;
