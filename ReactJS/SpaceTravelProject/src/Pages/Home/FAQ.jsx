import { useState } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa'

const FAQ = () => {

    const data = [
        {
            question: "Question 1?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nihil, doloremque incidunt quae corporis perferendis accusamus veniam. Aliquam odio, accusantium tempora possimus recusandae non dolorem nihil quo. Itaque, consectetur velit!"
        },
        {
            question: "Question 2?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nihil, doloremque incidunt quae corporis perferendis accusamus veniam. Aliquam odio, accusantium tempora possimus recusandae non dolorem nihil quo. Itaque, consectetur velit!"
        },
        {
            question: "Question 3?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nihil, doloremque incidunt quae corporis perferendis accusamus veniam. Aliquam odio, accusantium tempora possimus recusandae non dolorem nihil quo. Itaque, consectetur velit!"
        },
        {
            question: "Question 4?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nihil, doloremque incidunt quae corporis perferendis accusamus veniam. Aliquam odio, accusantium tempora possimus recusandae non dolorem nihil quo. Itaque, consectetur velit!"
        },
        {
            question: "Question 5?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nihil, doloremque incidunt quae corporis perferendis accusamus veniam. Aliquam odio, accusantium tempora possimus recusandae non dolorem nihil quo. Itaque, consectetur velit!"
        },
    ]

    const [selected, setSelected] = useState(null);

    const handleSelect = (i) => {
        if(selected===i){
            return setSelected(null);
        }
        setSelected(i);
    }

    return (
        <div>
            <h1 className='heading'>FAQs</h1>
            <section className='faq'>
                <div className="items">
                    {
                        data.map((item, index) => {
                            return (
                                <div className='wrapper' key={index}>
                                    <div className="question">
                                        <h3>{item.question}</h3>
                                        <FaChevronCircleUp className={selected===index && 'reverse'}
                                            onClick={() => handleSelect(index)}/>
                                    </div>
                                    <div className={selected===index ? "answers show" : "answers"}>
                                        <p>{item.answers}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default FAQ