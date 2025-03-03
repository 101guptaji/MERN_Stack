import useForm from "../../Hooks/useForm";

// Validation
const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if (!values.phone) {
        errors.phone = "Phone No. is required";
    }
    else if (!/^[6-9]\d{9}$/.test(values.phone)) {
        errors.phone = "Phone No. is invalid";
    }

    return errors;
};

const Form = () => {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        message:""
    };

    const { values, errors, handleChange, validateForm } = useForm(
        initialState, // Initial values
        validate // Validation function
    );

    function handleSubmit(e){
        e.preventDefault();

        if (validateForm()) {
            alert(`Thank you ${values.name}.
                \nWe received your query.
                \nWe will contact you soon at ${values.email}`);
        }
    }

    return (
        <div className="contact-container">
            <h1 className="heading">Contact Us</h1>
            <form className='form'>
                <div className="field">
                    <label>Name:</label>
                    <input type='text' name="name" value={values.name} onChange={handleChange} placeholder='Enter name' />
                    {errors.name && <span style={{ color: 'red', fontSize: "12px" }}>{errors.name}</span>}
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input type='email' name="email" value={values.email} onChange={handleChange} placeholder='Enter an email id' />
                    {errors.email && <span style={{ color: 'red', fontSize: "12px" }}>{errors.email}</span>}
                </div>
                <div className="field">
                    <label>Phone:</label>
                    <input type='number' name="phone" value={values.phone} onChange={handleChange} placeholder='Enter a phone number...' />
                    {errors.phone && <span style={{ color: 'red', fontSize: "12px" }}>{errors.phone}</span>}
                </div>
                <div className="field">
                    <label>Message:</label>
                    <textarea type='text' name="message" value={values.message} onChange={handleChange} placeholder='Enter a message...' />
                </div>

                <div className='actions'>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Form