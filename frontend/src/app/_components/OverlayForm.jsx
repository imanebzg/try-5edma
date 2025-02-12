"use client";

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const overlayContext = createContext();

function OverlayForm({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => {
    setOpenName("");
  };
  const open = setOpenName;
  return (
    <overlayContext.Provider
      value={{
        openName,
        close,
        open,
      }}
    >
      {children}
    </overlayContext.Provider>
  );
}

const OpenOverlay = ({ children, opens }) => {
  const { open } = useContext(overlayContext);
  return cloneElement(children, { onClick: () => open(opens) });
};

const Form = ({ name, children }) => {
  const { openName, close } = useContext(overlayContext);
  if (openName !== name) return null;
  return createPortal(
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-[1000] p-2">
      <div className="relative bg-white shadow-md p-4 rounded-lg">
        <button
          onClick={close}
          className="absolute right-2 top-2 hover:cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-neutral-2 text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

OverlayForm.Open = OpenOverlay;
OverlayForm.Form = Form;

export default OverlayForm;
