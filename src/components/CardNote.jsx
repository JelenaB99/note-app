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

export default function CardNote({ note }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { deleteNote, editNote } = useNotesHook();
  function handleDeleteNote() {
    deleteNote(note.id);
  }

  function handleEditNote(id) {
    editNote(id, "jelena", "content");
  }

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }
  function onClose() {
    setOpenDeleteModal(false);
  }

  return (
    <>
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
            onClick={() => handleOpenDeleteModal(note.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleEditNote(note.id)}>
            <EditIcon />
          </IconButton>
        </CardActions>

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
