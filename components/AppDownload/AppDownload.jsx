import React from "react";
import "./AppDownload.css";
import { assets } from "@/assets/assets";

const AppDownload = () => {
  return (
    <div className="appdownload" id="appdownload">
      <p>
        For Better Experience Download <br /> Tomatop App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store.src} alt="play-store" />
        <img src={assets.app_store.src} alt="app-store" />
      </div>
    </div>
  );
};

export default AppDownload;
