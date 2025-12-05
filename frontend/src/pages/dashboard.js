import "../styles.css"
import Header from "./navbar";
const Dashboard = () => {
    const Calendar = document.getElementById('Calendar');
    for (let i = 0; i<31; i++){
        const day = document.createElement('div');
        const dayNumber = document.createElement('p');
        day.className = 'gridbox-item';
        dayNumber= `Day ${i}`;
        circle.classList.add('1');
        circleHolder.appendChild(Calendar);
    }

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

            <div className="gridbox-container" id="Calendar">
            {/* TO DO WORK ON MAKING THIS AN ARRAY OF DAYS */}
                <div className="gridbox-item">Day 1</div>


            </div>
        </div>
    )
};

export default Dashboard;