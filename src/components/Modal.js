function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={cancelHandler}>Cancel</button>
      <button onClick={cancelHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
