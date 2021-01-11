

function formatDate(date) {
  const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul","ago","set","out","nov","dez"];
  let data = new Date(date);
  let dataFormatada = ((data.getDate() + " de " + meses[(data.getMonth())] + " de " + data.getFullYear()));
  

  return dataFormatada
}

export default formatDate