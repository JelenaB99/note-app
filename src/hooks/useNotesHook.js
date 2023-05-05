import { notesAtom } from "../state";
import { useAtom } from "jotai";

let key = 0;

const generateId = () => {
  const k = key;
  key++;
  return k;
};

export function useNotesHook() {
  const [notes, setNotes] = useAtom(notesAtom);
  function createNote(note) {
    setNotes((notes) => [...notes, { ...note, id: generateId() }]);
  }
  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  function editNote(id) {
  
     
  }

  return {
    createNote,
    deleteNote,
    editNote,
    notes,
  };
}
