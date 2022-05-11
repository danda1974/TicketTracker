import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";

const App = () => {
  return (
    <div className="app">
      <h1 className="ticketTracker__heading">Ticket Tracker</h1>
      <section className="ticketTracker">
        <Employee employeeArr={team} />
      </section>
    </div>
  );
};

export default App;
