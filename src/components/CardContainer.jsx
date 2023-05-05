import { useNotesHook } from "../hooks";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useState } from "react";
import AddNoteModal from "../components/AddNoteModal";
import { useModalHook } from "../hooks";

export default function CardContainer() {
  const { notes, deleteNote,editNote } = useNotesHook();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { openModal } = useModalHook();

  function handleDeleteNote(id) {
    deleteNote(id);
  }
  
 function handleEditNote(id){
  editNote(id)
 }

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }
  function onClose() {
    setOpenDeleteModal(false);
  }
  function handleOpen() {
    openModal();
  }

  return (
    <>
      <AddNoteModal />

      {notes.map((note) => (
        <Grid padding={3} key={note.id}>
          <Card
            sx={{
              maxWidth: 345,
            }}
          >
            <CardHeader title={note.title} />
            <CardContent>
              <Typography paragraph>{note.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                onClick={() => handleDeleteNote(note.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={()=>handleEditNote(note.id)} >
                <EditIcon />
              </IconButton>
            </CardActions>
          </Card>

          <DeleteConfirmationModal
            openModal={openDeleteModal}
            onClose={onClose}
            title={note.title}
          />
        </Grid>
      ))}
    </>
  );
}
