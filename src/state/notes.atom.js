import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const notesAtom = atom([
  { title: "title", content: "content", id: 88888 },
]);
