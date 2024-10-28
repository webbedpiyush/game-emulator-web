"use client";
import { useEffect } from "react";
// we can even make this server component using nextjs Script component
declare global {
  interface Window {
    EJS_player?: string;
    EJS_gameUrl?: string;
    EJS_core?: string;
    EJS_pathtodata?: string;
  }
}

export default function GameEmulator({ game }: { game: any }) {
  useEffect(() => {
    window.EJS_player = "#game";
    window.EJS_gameUrl = `/${game.game_url}`;
    window.EJS_core = `${game.categories[0]?.core}`;
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";

    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="bg-main rounded-xl flex justify-center">
      <div style={{ width: "640px", height: "480px", maxHeight: "100%" }}>
        <div id="game"></div>
      </div>
    </div>
  );
}
