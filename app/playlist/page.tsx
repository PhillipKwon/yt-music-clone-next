import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import * as React from "react";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";

interface PlayListPageProps {
  searchParams: {
    list: string;
  };
  params: {
    list: string;
  };
}
const page = async (props: PlayListPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) permanentRedirect(`/`);

  const imgSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  console.log(imgSrc);

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imgSrc} />
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, idx) => {
          return <SongCardRowExpand key={idx} song={song} />;
        })}
      </section>
      <div className="mt-12"></div>
    </PagePadding>
  );
};

export default page;
