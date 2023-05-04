import { Button } from "@mui/material";
import AddNoteModal from "../components/AddNoteModal";
import { useModalHook, useNotesHook } from "../hooks";

export default function NotesList() {
  const { openModal } = useModalHook();
  const { notes } = useNotesHook();

  function handleOpen() {
    openModal();
  }

  return (
    <>
      <AddNoteModal />
      {notes.map((note) => (
        <div>
          <p>{note.title}</p>
          <p>{note.content}</p>
        </div>
      ))}
      <Button onClick={handleOpen} variant="outlined">
        Add new Note
      </Button>
    </>
  );
}
