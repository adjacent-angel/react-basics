import { withRouter } from "react-router";

const Button = (props) => {
    return (
        <button onClick={() => props.history.push("/")}>
            Back to Home Page
        </button>
    );
}
 
export default withRouter(Button);