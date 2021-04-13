//const alienurl = "http://127.0.0.1:8080/aliens";
const alienurl = "http://192.168.43.111:8080/aliens";
const table = document.querySelector(".atable");

async function getAliens() {
  const response = await fetch(alienurl);
  return await response.json();
}

let tabletemp = `<tr>
<th>name</th>
<th>tech</th>
</tr>`;

(async () => {
  let aliens = await getAliens();
  const alienhtml = aliens.map(function (element) {
    return `<tr>
    <td>${element.aname}</td>
    <td>${element.tech}</td>
  </tr>`;
  }).join('');
  const fin = [tabletemp, alienhtml].join('');
  table.innerHTML = fin;
})();