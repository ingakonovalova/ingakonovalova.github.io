import { Routes, Route } from "react-router-dom";

import AboutMe from "./routes/about-me/about-me.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import ProfessionalInfo from "./routes/professional-info/professional-info.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="professional-info" element={<ProfessionalInfo />} />
      </Route>
    </Routes>
  );
};

export default App;
