import { Dialog, SelectChangeEvent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Plus } from "lucide-react";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTaskModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <button
        className=" hover:scale-110 ease-in-out duration-300 outline-none"
        onClick={handleClickOpen}
      >
        <Plus size={36} color="#ffffff" />
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="bg-primary h-screen text-white p-6 flex flex-col items-center ">
          <h2 className="text-4xl font-sans">Adicionar nota</h2>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
