import { ButtonWithModal } from "@frontend/framework/ButtonWithModal";
import { Button, Fade } from "@mui/material";

export default function Example() {
  return (
    <ButtonWithModal
      renderButton={({ openModal }) => (
        <Button variant="contained" onClick={openModal}>
          Click to me!
        </Button>
      )}
      renderModal={({ Modal, isModalOpen, closeModal }) => (
        <Modal open={isModalOpen} onClose={closeModal}>
          <Fade in={isModalOpen}>
            <div className="bg-white absolute absolute-center w-full lg:w-5/12">
              <p className="text-primary-800">Helo, U have Click to me!</p>
              <Button>Click to me!</Button>
            </div>
          </Fade>
        </Modal>
      )}
    />
  );
}
