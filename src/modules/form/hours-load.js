import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "../form/hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  //Limpar a lista de horários.
  hours.innerHTML = "";

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

  //Criação da lista de horas  e sua categoria
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavaible");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  // Adicionar o evento de cliques nos horários disponíveis.

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
