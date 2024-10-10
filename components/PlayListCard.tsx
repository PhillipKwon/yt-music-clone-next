"use client";

import { Playlist } from "@/types";
import Image from "next/image";
import React from "react";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";

const PlayListCard = ({ playlist }: { playlist: Playlist }) => {
  const { push } = useRouter();
  const { owner, playlistName, songList } = playlist;

  const songListLen = songList.length;
  const imgSrc = getRandomElementFromArray(songList).imageSrc;

  const onClickCard = (id) => {
    push(`/playlist?list=${id}`);
  };

  return (
    <article className="h-[240px] cursor-pointer">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          src={imgSrc}
          fill={true}
          alt="thumbNail"
          className="object-cover"
        />
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
