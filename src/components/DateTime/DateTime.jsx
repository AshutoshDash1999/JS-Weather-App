import dayjs from "dayjs"
import { useState } from "react"

const DateTime = () => {
    const [greetText, setGreetText] = useState("")
    const date = dayjs()

    // const greetWithIcon = (currentTime) => {
    //     switch (currentTime) {
    //         case time:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
  return (
    <div>
        <div className="font-bold text-4xl text-blue-500">{date.format("hh:mm A")}</div>
        <div className="font-bold text-2xl">{date.format("dddd, DD MMMM, YYYY ")}</div>
    </div>
  )
}
export default DateTime