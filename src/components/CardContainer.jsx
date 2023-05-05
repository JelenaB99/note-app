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
import { Provider } from "jotai";

export default function CardContainer() {
  const { notes } = useNotesHook();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  function handleOpenDeleteModal() {
    setOpenDeleteModal(true);
  }
  function onClose() {
    setOpenDeleteModal(false);
  }
  return (
    <>
      {notes.map((note) => (
        <>
          <Grid padding={3}>
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
                <IconButton onClick={handleOpenDeleteModal} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Provider>
              <DeleteConfirmationModal
                openModal={openDeleteModal}
                onClose={onClose}
                itemTitle={note.title}
              />
            </Provider>
          </Grid>
        </>
      ))}
    </>
  );
}
