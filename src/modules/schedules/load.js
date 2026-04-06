import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data.
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value;

  // Renderizar as horas disponíveis
  hoursLoad({date});
  // Buscar na API os agendamentos para carregar do lado direito da tela.

  // Os horarios disponíveis (horário futuro + não agendado) do lado esquerdo
}
