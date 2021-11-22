const microURL = "https://calm-pond-05e0f7e03.azurestaticapps.net/";

function loadURL() {
  console.log(process.env.NODE_ENV);
  const host =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : microURL;

  const scriptId = `micro-frontend-script`;

  const renderScript = () => {
    window[`renderFrontend`]();
  };

  if (document.getElementById(scriptId)) {
    renderScript();
    return;
  }

  fetch(`${host}/asset-manifest.json`, { cache: "force-cache" })
    .then((res) => res.json())
    .then((manifest) => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.crossOrigin = "";
      script.src = `${host}${manifest.files["main.js"]}`;
      document.querySelector("#root").parentElement.appendChild(script);
      script.onload = () => {
        renderScript();
      };
    });
}

loadURL();
