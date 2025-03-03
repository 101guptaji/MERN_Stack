import { FaTimes } from 'react-icons/fa'

const Modal = ({handleClick }) => {

  return (

    <div className="overlay">
      <div className="modal">
        <div className="cross">
          <FaTimes style={{ color: "white" }} size={25} onClick={handleClick}/>
        </div>

        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti fugit molestias debitis possimus laudantium ab reiciendis iure repellendus optio?
        </h2>

      </div>
    </div>

  )
}

export default Modal