
import { Button } from "@mui/material";
import "./Form.css";


function Form({onSubmit}){
    return <div className="form-container">
        <h1>Login</h1>
        <section>
            <form className="form" onSubmit={onSubmit}>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </section>
    </div>
}

export default Form;