import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

interface InContribution {
  title: string;
  url: string;
}

const inContributions: InContribution[] = [
  { title: "Text in Train", url: "https://text-in-train.vercel.app/" },
  { title: "String in Ship", url: "https://string-in-ships.vercel.app/" },
  {
    title: "Values in Vehicles",
    url: "https://values-in-vehicles.vercel.app/",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <footer>
        Also check out{" "}
        {inContributions.map((url, index) => {
          return (
            <React.Fragment key={index}>
              <a href={url.url} target="_blank" rel="noopener noreferrer">
                {url.title}
              </a>
              {index !== inContributions.length - 1 && " and "}
            </React.Fragment>
          );
        })}
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);
