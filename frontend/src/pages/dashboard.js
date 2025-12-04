import "../styles.css"
import Header from "./navbar";
const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <br/>
            <br/>

            <h2>Dashboard</h2>
            {/* Option to switch through years / months */}
            <h3>Year: 2025</h3>
            <h3>Month: December</h3>
            <div className="day_names">
                    <h5> Sunday</h5>
                    <h5>Monday</h5>
                    <h5>Tuesday</h5>
                    <h5>Wednesday</h5>
                    <h5>Thursday</h5>
                    <h5>Friday</h5>
                    <h5>Saturday</h5>
                </div>

            <div className="gridbox-container">
            {/* TO DO WORK ON MAKING THIS AN ARRAY OF DAYS */}
                <div className="gridbox-item">Day 1</div>
                <div className="gridbox-item">Day 2</div>
                <div className="gridbox-item">Day 3</div>
                <div className="gridbox-item">Day 4</div>
                <div className="gridbox-item">Day 5</div>
                <div className="gridbox-item">Day 6</div>
                <div className="gridbox-item">Day 7</div>
                <div className="gridbox-item">Day 1</div>
                <div className="gridbox-item">Day 2</div>
                <div className="gridbox-item">Day 3</div>
                <div className="gridbox-item">Day 4</div>
                <div className="gridbox-item">Day 5</div>
                <div className="gridbox-item">Day 6</div>
                <div className="gridbox-item">Day 7</div>
                <div className="gridbox-item">Day 1</div>
                <div className="gridbox-item">Day 2</div>
                <div className="gridbox-item">Day 3</div>
                <div className="gridbox-item">Day 4</div>
                <div className="gridbox-item">Day 5</div>
                <div className="gridbox-item">Day 6</div>
                <div className="gridbox-item">Day 7</div>

            </div>
        </div>
    )
};

export default Dashboard;