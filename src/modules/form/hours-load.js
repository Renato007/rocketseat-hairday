import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";


const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  console.log(date);
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora
    const [scheuduleHour] = hour.split(":");

    // Adiciona a hora na date e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheuduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavaible")

    li.textContent = hour

    hours.append(li)
  });
}
