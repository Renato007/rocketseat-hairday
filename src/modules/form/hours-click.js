export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available');
// console.log(hours);

  hours.forEach((available) => {
    available.addEventListener("click", (selected) =>{

        // Remove a classe hour-selected de todas as li não selecionadas.
        hours.forEach((hour) =>{
            hour.classList.remove("hour-selected")
        })

        //Adicionar a classe na li clicadas
        selected.target.classList.add("hour-selected")
    })
  })
}