"use client";

import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {
  FiMoreVertical,
  FiPlay,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface SongCardProps {
  song: TopSong;
}
const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex flex-row gap-4 h-[49px] w-full relative group items-center">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-[rgba(0,0,0,0.7)] cursor-pointer">
          <FiPlay size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4 cursor-pointer">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="hidden group-hover:flex absolute right-0  flex-row h-[48px] w-1/2 justify-end items-center bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
