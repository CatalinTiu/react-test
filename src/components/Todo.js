import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState();

  function deleteHandler() {
    console.log("Clicked!");
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModal}/> : null}
      {modalIsOpen && <Backdrop Clicked={closeModal}/>}
    </div>
  );
}

export default Todo;
