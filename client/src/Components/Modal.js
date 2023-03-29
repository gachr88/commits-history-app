
const Modal = ({ close, children }) => {
    const clickHandler = () => {
        close();
    }
    return (
        <div className="flex justify-center items-center absolute h-full w-full top-0">
            <div className="w-80 h-80 bg-white shadow-md p-5 text-center">
                {children}
                <hr />
                <div className='d-grid gap-2'>
                    <button onClick={clickHandler} className="btn btn-danger mt-2">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;