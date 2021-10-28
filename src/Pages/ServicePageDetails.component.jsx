import Button from '../Button.component';

const ServicePageDetails = (props) => {
    console.log("service details page props", props);
    return (
        <div>
            <h1>Service Details Page</h1>
            <h2>Your service ID number is: {props.match.params.serviceId}</h2>
            <button onClick={() => props.history.push('/service')}>Back to Services</button>
            <Button />
        </div>
    );
}
 
export default ServicePageDetails;