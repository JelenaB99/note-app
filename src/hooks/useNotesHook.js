import { notesAtom } from "../state";
import { useAtom } from "jotai";

//[{title:'title;, content:'content'}]
const a = [];
const b = a;
a.push(1);

export function useNotesHook() {
  const [notes, setNotes] = useAtom(notesAtom);
  function createNote(note) {
    setNotes((notes) => [...notes, note]); 
  }
  function deleteNote() {}
  function editNote() {}

  return {
    createNote,
    deleteNote,
    editNote,
    notes,
  };
}
