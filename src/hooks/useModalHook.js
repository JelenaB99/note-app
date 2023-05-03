import { isModalOpenAtom } from "../state/isModalOpen.atom";
import { useAtom } from "jotai";
export function useModalHook(){
 const [isModalOpen, setIsModalOpen]=useAtom(isModalOpenAtom)

 function openModal(){
    setIsModalOpen(true)
 }

 function closeModal(){
    setIsModalOpen(false)
 }
 function toggleModal(){
    setIsModalOpen(!isModalOpen)
 }


 return {
    isModalOpen,openModal,closeModal,toggleModal
 }
}