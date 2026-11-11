// Demo data only. Replace with a verified API/backend for production use.
const stations = [
  { id: 1, name: "City Centre Charging Hub", area: "RS Puram, Coimbatore", connector: "CCS2", power: "60 kW", status: "Available" },
  { id: 2, name: "Green Drive Station", area: "Peelamedu, Coimbatore", connector: "Type 2", power: "22 kW", status: "Available" },
  { id: 3, name: "Highway Fast Charge", area: "Avinashi Road, Coimbatore", connector: "CCS2", power: "120 kW", status: "Busy" },
  { id: 4, name: "Eco Charge Point", area: "Gandhipuram, Coimbatore", connector: "CHAdeMO", power: "50 kW", status: "Available" },
  { id: 5, name: "Campus EV Charging", area: "Saravanampatti, Coimbatore", connector: "Type 2", power: "11 kW", status: "Busy" },
  { id: 6, name: "South City Chargers", area: "Singanallur, Coimbatore", connector: "CCS2", power: "60 kW", status: "Available" }
];

const list = document.querySelector("#station-list");
const search = document.querySelector("#search");
const connector = document.querySelector("#connector");
const status = document.querySelector("#status");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const dialog = document.querySelector("#booking-dialog");
const form = document.querySelector("#booking-form");
const toast = document.querySelector("#toast");
let selected = null;

function renderStations() {
  const term = search.value.trim().toLocaleLowerCase();
  const filtered = stations.filter(s =>
    `${s.name} ${s.area}`.toLocaleLowerCase().includes(term) &&
    (connector.value === "all" || s.connector === connector.value) &&
    (status.value === "all" || s.status === status.value)
  );
  count.textContent = `${filtered.length} sample station${filtered.length === 1 ? "" : "s"} found`;
  empty.hidden = filtered.length !== 0;
  list.replaceChildren();
  for (const station of filtered) {
    const card = document.createElement("article");
    card.className = "station-card";
    card.innerHTML = `
      <div class="card-top"><span class="station-icon" aria-hidden="true">⚡</span>
        <span class="status ${station.status.toLowerCase()}">${station.status}</span></div>
      <h3></h3><p class="location"></p>
      <div class="meta"><div><span>Connector</span><strong class="connector"></strong></div>
      <div><span>Power</span><strong class="power"></strong></div></div>
      <button class="btn" type="button" ${station.status !== "Available" ? "disabled" : ""}>${station.status === "Available" ? "Plan a Session" : "Currently Busy"}</button>`;
    card.querySelector("h3").textContent = station.name;
    card.querySelector(".location").textContent = `📍 ${station.area}`;
    card.querySelector(".connector").textContent = station.connector;
    card.querySelector(".power").textContent = station.power;
    card.querySelector("button").addEventListener("click", () => openBooking(station));
    list.appendChild(card);
  }
}

function openBooking(station) {
  selected = station;
  document.querySelector("#selected-station").textContent = `${station.name} · ${station.area}`;
  const today = new Date();
  const localToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
  const dateField = document.querySelector("#booking-date");
  dateField.min = localToday;
  dateField.value = localToday;
  dialog.showModal();
}
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity() || !selected) return;
  const details = {
    stationId: selected.id,
    station: selected.name,
    name: document.querySelector("#customer-name").value.trim(),
    date: document.querySelector("#booking-date").value,
    time: document.querySelector("#booking-time").value
  };
  if (!details.name) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const chosen = new Date(details.date + "T00:00:00");
  if (chosen < today) { alert("Please choose today or a future date."); return; }
  try { localStorage.setItem("chargingPointDemoPlan", JSON.stringify(details)); }
  catch (e) { /* Browser may block storage; confirmation still works. */ }
  dialog.close();
  form.reset();
  toast.textContent = `Demo plan saved for ${details.station} on ${details.date} at ${details.time}. This is not a real booking.`;
  toast.classList.add("show");
});
[search, connector, status].forEach(control => control.addEventListener("input", renderStations));
renderStations();
