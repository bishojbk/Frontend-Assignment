import News from "./pages/news/news";
import Footer from "./pages/footer/footer";
import Homepage from "./pages/homepage/homepage";
import Whoweare from "./pages/whoweare/whoweare";
import Campaigns from "./pages/campaigns/campaigns";
import Resources from "./pages/resources/resources";
import ContactUs from "./pages/contactus/contactus";
import FeaturesSection from "./pages/features-section/features-section";

import "bootstrap/dist/css/bootstrap.css";

import "./app.styles.scss";

function App() {
  return (
    <div>
      <Homepage />
      <Campaigns />
      <Whoweare />
      <FeaturesSection />
      <News />
      <Resources />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
