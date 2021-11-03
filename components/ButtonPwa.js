import React, { useContext, useState } from "react";
import BannerContext from "../context/BannerContext";
import SimpleWithDismissButton from "./SimpleWithDismissButton";

const ButtonPWA = () => {
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);
  const {promptInstall, supportsPWA} = useContext(BannerContext)

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  const handleOpenModal = () => {
    setVisible(true);
    setOpen(true);
  };

  return (
    <>
      <button
        className="text-white font-bold underline"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={supportsPWA ? onClick : handleOpenModal}
      >
        Instalar
      </button>
      {visible && (
        <SimpleWithDismissButton
          open={open}
          setOpen={setOpen}
          setVisible={setVisible}
        />
      )}
    </>
  );
};

export default ButtonPWA;
