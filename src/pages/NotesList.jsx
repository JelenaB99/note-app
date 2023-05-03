import { Button } from "@mui/material";
import AddNoteModal from "../components/AddNoteModal";

import { useModalHook } from "../hooks";

export default function NotesList() {
  const { openModal } = useModalHook();

  function handleOpen() {
    openModal();
  }

  return (
    <>
      <AddNoteModal />
      <Button onClick={handleOpen} variant="outlined">
        Add new Note
      </Button>
    </>
  );
}
