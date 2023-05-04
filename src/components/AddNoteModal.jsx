import { Button, Modal, Typography, Box, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { useModalHook, useNotesHook } from "../hooks";
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

export default function AddNoteModal() {
  const { closeModal, isModalOpen } = useModalHook();
  const { createNote, notes } = useNotesHook();
  const [title, setNoteTitle] = useState("");
  const [content, setNoteContent] = useState("");

  console.log(notes);
  function handleTitleChange(e) {
    setNoteTitle(e.target.value);
  }

  function handleContentChange(e) {
    setNoteContent(e.target.value);
  }


  function resetFields(){
    setNoteTitle("")
    setNoteContent("")
  }

  function handleCreate() {
    createNote({ title, content });
    closeModal() 
    resetFields()
    
  }


  function handleCancel(){
    closeModal() 
    resetFields()

  }

  return (
    <div>
      <Modal
        aria-labelledby="title"
        aria-describedby="description"
        open={isModalOpen}
      >
        <Box sx={style}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography id="add-modal-titel" variant="h6" component="h2">
                Add new Note
              </Typography>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  id="Note-Title"
                  label="Note Title"
                  variant="outlined"
                  value={title}
                  onChange={handleTitleChange}
                ></TextField>

                <Grid item>
                  <TextField
                    fullWidth
                    id="Note-Content"
                    label="Note Content"
                    variant="outlined"
                    value={content}
                    onChange={handleContentChange}
                  ></TextField>
                  <Grid item container justifyContent="end" spacing={2}>
                    <Grid item>
                      <Button variant="contained" onClick={handleCreate}>
                        Create
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button onClick={handleCancel}>Cancel</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
