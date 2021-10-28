import { Link } from 'react-router-dom';

const ServicePage = (props) => {
    return (
        <>
        <h1>Service Page Component</h1>
        <h2>List of Services</h2>
        <ul>
            <li><Link to={`${props.match.url}/7`}>Oil Change</Link></li>
            <li><Link to={`${props.match.url}/13`}>Tire Rotation</Link></li>
            <li><Link to={`${props.match.url}/9`}>Engine Tune Up</Link></li>
        </ul>
        </>
    );
}

export default ServicePage;