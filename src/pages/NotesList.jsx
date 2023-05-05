import { IconButton } from "@mui/material";
import AddNoteModal from "../components/AddNoteModal";
import { useModalHook } from "../hooks";
import CardContainer from "../components/CardContainer";
import AddIcon from "@mui/icons-material/Add";
export default function NotesList() {
  const { openModal } = useModalHook();

  function handleOpen() {
    openModal();
  }

  return (
    <>
      <AddNoteModal />
      <IconButton onClick={handleOpen}>
        <AddIcon color="secondary" fontSize="large" />
       </IconButton>
       <CardContainer />
    </>
  );
}
