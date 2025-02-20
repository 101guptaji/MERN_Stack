import React, { useState } from 'react'

const Contact = () => {
  const [query, setQuery] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
    // console.log(query);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you ${query.Name}! 
      We received your query: \n
      Subject: ${query.Subject}
      Message: ${query.Message} \n
      We will contact you on ${query.Email} soon.`);

    setQuery({
      Name: "",
      Email: "",
      Subject: "",
      Message: ""
    })
  }

  return (
    <div>
      <h1>Contact Us </h1>

      <form>
        <div>
          <label htmlFor='Name'>Name: </label>
          <input type='text' name='Name' value={query.Name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='Email'>Email: </label>
          <input type='email' name='Email' value={query.Email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='Subject'>Subject: </label>
          <input type='text' name='Subject' value={query.Subject} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='Message'>Message: </label>
          <textarea name='Message' value={query.Message} onChange={handleChange} ></textarea>
        </div>

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Contact