import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useNotesHook } from "../hooks";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function EditModal(props) {
  const { openModal, onClose, note } = props;
  const { editNote } = useNotesHook();
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleContentChange(e) {
    setContent(e.target.value);
  }
  function handleEditNote() {
    editNote(note.id, title, content);
    onClose();
  }

  return (
    <>
      <Modal
        aria-labelledby="title"
        aria-describedby="description"
        open={openModal}
        onClose={onClose}
      >
        <Box sx={style}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography id="add-modal-titel" variant="h6" component="h2">
                Edit this note
              </Typography>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  id="Note-Title"
                  label="Note Title"
                  variant="outlined"
                  color="secondary"
                  value={title}
                  onChange={handleTitleChange}
                ></TextField>

                <Grid item>
                  <TextField
                    fullWidth
                    id="Note-Content"
                    label="Note Content"
                    variant="outlined"
                    color="secondary"
                    value={content}
                    onChange={handleContentChange}
                  ></TextField>
                  <Grid item container justifyContent="end" spacing={2}>
                    <Grid item>
                      <Button
                        onClick={handleEditNote}
                        color="secondary"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button onClick={onClose}>Cancel</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
