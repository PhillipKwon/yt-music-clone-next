import React from "react";
import { Slider as PlayerSlider } from "../ui/playerSlider";
import { useAudio } from "react-use";

export default function PlayerContent() {
  const [audio, state, controls, ref] = useAudio({
    src: null,
    autoPlay: true,
  });

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>
      <div>{audio}</div>
    </div>
  );
}
