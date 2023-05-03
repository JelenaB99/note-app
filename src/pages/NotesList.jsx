import { Button } from "@mui/material"
import AddNoteModal from "../components/AddNoteModal"
import { useState } from "react"


export default function NotesList() {
const [openModal,setOpenModal]=useState(false);


function handleOpen(){
  setOpenModal(true);

}

function handleOnCloseModal(){
  setOpenModal(false)
}
  return (
  <>
  <AddNoteModal 
  openModal={openModal}
  onCloseModal={handleOnCloseModal}
   />
<Button 
onClick={handleOpen}
variant="outlined">
Add new Note
</Button>

  </>
  )
}
