"use client";

import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import {
  FiMoreVertical,
  FiPlay,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardRowExpandProps {
  song: Song;
}
const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { addSongList } = usePlayerState();
  const { channelId, channel } = song;
  const { push } = useRouter();
  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  const onClickPlay = () => {
    addSongList([song]);
  };

  return (
    <article className="flex flex-row gap-4 h-[49px] w-full relative group items-center">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section
          className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-[rgba(0,0,0,0.7)] cursor-pointer"
          onClick={onClickPlay}
        >
          <FiPlay size={20} />
        </section>
      </div>
      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          className="text-neutral-500 hover:underline cursor-pointer truncate"
          onClick={onClickChannel}
        >
          {channel}
        </div>
      </div>
      <section className="hidden group-hover:flex absolute right-0 flex-row h-[48px] w-[120px] justify-end items-center bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
