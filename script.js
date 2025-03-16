function volume_sphere(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  let radius = Number(document.getElementById("radius").value);
  let volumeField = document.getElementById("volume");

  if (isNaN(radius) || radius < 0) {
    volumeField.value = NaN; // Handle invalid input
  } else {
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // V = 4/3 * π * r^3
    volumeField.value = volume.toFixed(4); // Round to 4 decimal places
  }
}

window.onload = () => {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
