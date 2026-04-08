import dayjs from "dayjs";

import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");

const selectedDate = document.getElementById("date");

//Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual.
selectedDate.value = inputToday;

//Definir a data mínima como sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //Previne o comportamento padrão de carregamento a página
  event.preventDefault();

  try {
    //Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recuperar o horário selecionado
    const hourSeleceted = document.querySelector(".hour-selected");
    
    if(!hourSeleceted){
        return alert("Selecione a hora!")
    }

    //Recupera somente a hora
    const [hour] = hourSeleceted.innerText.split(":")

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // Gerar um ID
    const id = new Date().getTime()
    
    await scheduleNew({
        id,
        name,
        when
    });
    

  } catch (error) {
    // caso der erro
    alert("Não foi possivel realizar o agendamento.");
    console.log(error);
  }
};
