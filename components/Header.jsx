"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./Navigator";
import { cn } from "@/lib/utils";
import useUiState from "@/hooks/useUiState";

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/** 로고 */}
        {/** 재생목록 + 네비게이션 */}
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const { headerImageSrc } = useUiState();
  const [isScrolled, setIsScrolled] = useState(false);

  const headRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;

      setIsScrolled(scrollValue !== 0);
    };

    headRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      {/** bg-section */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            fill
            alt="mediaItem"
            className="object-cover"
            src={
              headerImageSrc ||
              "https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section>
      {/** Search Section */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="w-full h-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
