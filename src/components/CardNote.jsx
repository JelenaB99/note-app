import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useNotesHook } from "../hooks";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditModal from "./EditModal";

export default function CardNote({ note }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const { deleteNote } = useNotesHook();
  function handleDeleteNote() {
    deleteNote(note.id);
  }

 

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }
  function onClose() {
    setOpenDeleteModal(false);
  }
  function handleOpenEditModal() {
    setOpenEditModal(true);
  }
  function closeEditModal() {
    setOpenEditModal(false);
  }

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          border: 1,
        }}
      >
        <CardHeader title={note.title} />
        <CardContent>
          <Typography paragraph>{note.content}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => handleOpenDeleteModal(note.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleOpenEditModal}>
            <EditIcon />
          </IconButton>
        </CardActions>
        <EditModal
          openModal={openEditModal}
          onClose={closeEditModal}
          note={note}
        />

        <DeleteConfirmationModal
          openModal={openDeleteModal}
          onClose={onClose}
          title={note.title}
          onConfirm={handleDeleteNote}
        />
      </Card>
    </>
  );
}
