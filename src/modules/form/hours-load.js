import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";


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
  console.log(opening); 
  
}
