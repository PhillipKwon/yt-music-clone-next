import { TopSong } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
// await sleep(1000);

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElementFromArray(arr: any[]) {
  const len = arr?.length;

  return arr[getRandomInt(0, len - 1)];
}

export function chunkArray(arr: any[], chunkSize: number) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }

  return resultArray;
}
