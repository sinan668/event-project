
  document.getElementById("hdata").addEventListener("submit", (e) => {
    e.preventDefault();
 


const data={
    company:document.getElementById("Cname").value,
    Event:document.getElementById("Ename").value,
    place:document.getElementById("place").value,
    date:document.getElementById("date").value,
    time:document.getElementById("Time").value,
    Outfit:document.getElementById("Outfit").value,
    Amount:document.getElementById("Amount").value

}

console.log(data)
 })

 let helloEvent={
  Cname:"helloEvent",
  Ename:"marraige",
  place:"palakkad",
  Time:"14:30",
  date:"2026-02-05",
  Outfit:"yes",
  Amount:750
 }

 duv.innerHtml =`
  <p>Event: ${helloEvent.Cname}</p>`