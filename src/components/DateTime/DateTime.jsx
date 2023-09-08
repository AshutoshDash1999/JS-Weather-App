import { IconMoon, IconSun, IconSunset2 } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const DateTime = () => {
  const [greetText, setGreetText] = useState("");
  const [greetIcon, setGreetIcon] = useState(null);
  
  const date = dayjs();

  const greetWithIcon = (currentTime = date.format("HH")) => {
    if (currentTime >= 12 && currentTime < 17) {
      setGreetText("Good Afternoon");
      setGreetIcon(<IconSunset2 size={30}/>);
    } else if (currentTime >= 5 && currentTime < 12) {
      setGreetText("Good Morning");
      setGreetIcon(<IconSun size={30}/>);
    } else {
      setGreetText("Good Evening");
      setGreetIcon(<IconMoon size={30}/>);
    }
  };

  useEffect(() => {
    greetWithIcon();
  }, []);

  return (
    <div>
      <div className="font-bold text-4xl text-blue-500">
        {date.format("hh:mm A")}
      </div>
      <div className="font-bold text-2xl">
        {date.format("dddd, DD MMMM, YYYY ")}
      </div>
      <div className="text-blue-500 flex items-center font-semibold text-2xl gap-1 my-2">
        {greetIcon}
        {greetText} !
      </div>
    </div>
  );
};
export default DateTime;
