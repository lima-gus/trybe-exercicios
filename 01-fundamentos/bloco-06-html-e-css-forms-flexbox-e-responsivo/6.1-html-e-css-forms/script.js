arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const estados = document.getElementById('estado');

function addEstados() {
  for (i = 0; i < arrayTextoEstado.length; i += 1 ) {
    const addOption = document.createElement('option');
    estados.appendChild(addOption).innerText = arrayTextoEstado[i];
    estados.appendChild(addOption).value = arrayTextoEstado[i];
  }
}

addEstados();
