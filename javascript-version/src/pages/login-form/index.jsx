import { useEffect } from 'react'
// import Link from 'next/link'

const PrepopulatedForm = () => {
  // Simulating server response
  const serverResponse = {
    id: 15,
    username: 'kminchelle',
    email: 'kminchelle@qq.com',
    firstName: 'Jeanne',
    lastName: 'Halvorson',
    gender: 'female'
  }

  useEffect(() => {
    populateForm(serverResponse)
  }, []) // Empty dependency array ensures it runs only once after initial rendering

  // Function to populate the form with server data
  function populateForm(data) {
    document.getElementById('username').value = data.username
    document.getElementById('email').value = data.email
    document.getElementById('firstName').value = data.firstName
    document.getElementById('lastName').value = data.lastName
    document.getElementById('gender').value = data.gender
  }

  return (
    <div>
      <title>Pre-populated Form</title>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }

          form {
            width: 300px;
            margin: 0 auto;
          }

          label {
            display: block;
            margin-bottom: 5px;
          }

          input[type="text"],
          input[type="email"],
          select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            margin-bottom: 10px;
            outline: none;
          }

          select {
            height: 35px;
          }

          input[type="submit"] {
            background-color: #804BDF;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          input[type="submit"]:hover {
            background-color: #45a049;
          }
        `
        }}
      />
      <form id='userForm'>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' required />
        <br />
        <br />
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />
        <br />
        <br />
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' id='firstName' name='firstName' required />
        <br />
        <br />
        <label htmlFor='lastName'>Last Name:</label>
        <input type='text' id='lastName' name='lastName' required />
        <br />
        <br />
        <label htmlFor='gender'>Gender:</label>
        <select id='gender' name='gender' required>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
        <br />
        <br />
        <input type='submit' defaultValue='Submit' />
      </form>
    </div>
  )
}

export default PrepopulatedForm
