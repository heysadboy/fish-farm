import FishTank from "../components/FishTank";

const App = () => {
    return (
        <div className="ui container">
          <FishTank
            title="Sample Title"
            description="This is a sample description for the card."
            imageUrl="https://via.placeholder.com/350x350"
          />
        </div>
      );
};

export default App;
