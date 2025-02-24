// For testing puroposes, you may need to change these places to something closer to you
const places = [
  {
    name: "Rochester Abandoned Subway",
    latitude: 43.154722,
    longitude: -77.609722,
  },
  { name: "Washington Square Park", latitude: 43.1534, longitude: -77.6053 },
  {
    name: "Rochester Contemporary Art Center",
    latitude: 43.156619,
    longitude: -77.60073,
  },
];

const loadPlaces = () => {
  const scene = document.querySelector("a-scene");

  places.forEach((place) => {
    const sphere = document.createElement("a-sphere");
    sphere.setAttribute("color", "blue");

    const entity = document.createElement("a-entity");
    entity.setAttribute(
      "gps-entity-place",
      `latitude: ${place.latitude}; longitude: ${place.longitude}`
    );

    const text = document.createElement("a-text");
    text.setAttribute("value", place.name);
    text.setAttribute("align", "center");
    text.setAttribute("position", "0 2 0");
    entity.appendChild(text);
    entity.appendChild(sphere);

    entity.addEventListener("click", () =>
      alert(`You clicked on: ${place.name}`)
    );

    scene.appendChild(entity);
  });
};

window.onload = loadPlaces;
