document.addEventListener("DOMContentLoaded", () => {
  const buttons = [{ name: "New Site", url: "https://chechiamah.com" }];

  const container = document.getElementById("buttons-container");

  buttons.forEach(({ name, url }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "rough-button-wrapper";
    wrapper.addEventListener("click", () => window.open(url, "_blank"));

    const canvas = document.createElement("canvas");
    canvas.className = "rough-canvas";
    const width = wrapper.offsetWidth || 200;
    const height = wrapper.offsetHeight || 60;
    canvas.width = width;
    canvas.height = height;

    const rc = rough.canvas(canvas);
    rc.path(
      `M10,0 H${width - 10} Q${width},0 ${width},10 V${height - 10} Q${width},${height} ${width - 10},${height} H10 Q0,${height} 0,${height - 10} V10 Q0,0 10,0 Z`,
      {
        fill: '#FFC067',
        fillStyle: 'solid',
        stroke: '#804200',
        roughness: 2,
        bowing: 2,
        strokeWidth: 1.5
      }
    );

    const label = document.createElement("div");
    label.className = "rough-label";
    label.textContent = name;

    wrapper.appendChild(canvas);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
});
