import { useNotesHook } from "../hooks";
import { Grid } from "@mui/material";
import AddNoteModal from "../components/AddNoteModal";
import { useModalHook } from "../hooks";
import CardNote from "./CardNote";

export default function CardContainer() {
  const { notes } = useNotesHook();

  const { openModal } = useModalHook();

  function handleOpen() {
    openModal();
  }

  return (
    <>
      <AddNoteModal />

      {notes.map((note) => (
        <Grid padding={3} key={note.id}>
          <CardNote note={note} />
        </Grid>
      ))}
    </>
  );
}
