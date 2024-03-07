import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (<div className="error">
        <h1>Oops</h1>
        <h2>{error.status} : {error.statusText}</h2>
        <h2>{error.data}</h2>
    </div>)
}
export default Error;