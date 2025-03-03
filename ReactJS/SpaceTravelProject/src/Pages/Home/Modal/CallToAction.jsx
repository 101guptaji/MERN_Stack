import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal';

const CallToAction = () => {
    const [modal, setModal] = useState(false);

    const handleClick = () => {
        setModal(!modal);    
    }

    return (
        <div>
            <section className="call-to-action">
                <h2>Hurry Up Book your Tickets</h2>
                <Link onClick={handleClick}>
                    Know More
                </Link>
            </section>
            {
                modal && <Modal handleClick={handleClick}/> 
            }
        </div>
    )
}

export default CallToAction