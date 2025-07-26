export default function JobListCards(props) {
    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                <h4 className="card-title">{props.designation}</h4>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.companyName}</h6>
                <p className="card-text">{props.location}</p>
                <p className="card-text">₹{props.stipend}/month</p>
                <p className="card-text">{props.experience}</p>
            </div>
        </div>
    );
}
