// import React, { useState } from "react";

// function LogIn () {
//     const [formObject, setFormObject] = useState({
//         username:"",
//         password:""
//         })

//         function handleInputChange(event) {
//             const { username, value } = event.target;
//             const { password, value } = event.target;
//             setFormObject({...formObject, [username]: value})
//             setFormObject({...formObject, [password]: value})
//             console.log(formObject.password)
//           };

//         function handleFormSubmit(event) {
//             event.preventDefault()
//             const{username} =event.target
//             const {password} = event.target
//             localStorage.setItem("username", username);
//             localStorage.setItem("password", password);

//         }
        
//     return (
//         <form>
//         <label>
//           Login 
//           <input type="text" name="name" />
//           <input type="text" name="password"/>
//         </label>
//         <button type="submit" value="Submit" onClick={handleFormSubmit} />
//       </form> 
//     )
// };

// export default LogIn;