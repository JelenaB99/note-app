import { notesAtom } from "../state";
import { useAtom } from "jotai";

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
