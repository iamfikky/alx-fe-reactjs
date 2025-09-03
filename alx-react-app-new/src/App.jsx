import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <MainContent />
      
      {/* Example User Profiles */}
      <UserProfile 
        name="John Doe" 
        age={28} 
        bio="Traveler, foodie, and tech enthusiast." 
      />
      <UserProfile 
        name="Jane Smith" 
        age={32} 
        bio="Adventure seeker and nature lover." 
      />

      <Footer />
    </div>
  );
}

export default App;
