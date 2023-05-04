import { useNotesHook } from "../hooks";
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CardContainer() {
  const { notes } = useNotesHook();

  return (
    <>
      {notes.map((note) => (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={note.title} />
            <CardContent>
              <Typography paragraph>{note.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="delete">
            <DeleteIcon/>
            </IconButton>
            <IconButton>
            <EditIcon/>
            </IconButton>
            </CardActions>
            
          </Card>
        </>
      ))}
    </>
  );
}
