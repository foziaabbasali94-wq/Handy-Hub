import Navbar from "./component/Navbar";
import Footer from "./component/Footer"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeLandingpage from "./pages/HomeLandingpage";
// { img: chilled, title: "Chilled Water Pipe Insulation", Routes, "/subservices/1" };


import ServicesLandingpage from "./pages/ServicesLandingpage";

import AboutLandingpage from "./pages/AboutLandingpage";

import ContactLandingpage from "./pages/ContactLandingpage";


import Sublandingpage1 from "./pages/Sublandingpage1";
import Subservicesbackimg from "./pages/subservices/Subservicesbackimg";
import Sublandingpage2 from "./pages/Sublandingpage2";
import Sublandingpage3 from "./pages/Sublandingpage3";
import Sublandingpage4 from "./pages/Sublandingpage4";
import Sublandingpage5 from "./pages/Sublandingpage5";
import Sublandingpage6 from "./pages/Sublandingpage6";
import Subservicesbackimg2 from "./pages/subservices/Subservicesbackimg2";
import Subservicesbackimg3 from "./pages/subservices/Subservicesbackimg3";
import Subservicesbackimg4 from "./pages/subservices/Subservicesbackimg4";
import Subservicesbackimg5 from "./pages/subservices/Subservicesbackimg5";
import Subservices5img1 from "./pages/subservices/Subservices5img1";
import Subservices5img2 from "./pages/subservices/Subservices5img2";
import Subservices5img3 from "./pages/subservices/Subservices5img3";
import Subservices5img4 from "./pages/subservices/Subservices5img4";

import CardLandingpage from "./pages/CardLandingpage";
import Sublandingpage7 from "./pages/Sublandingpage7";
import Subservices7 from "./pages/subservices/Subservices7";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Landing Page Route */}
     
        <Route path="/" element={<HomeLandingpage />} />
           
        <Route path="/services" element={<ServicesLandingpage />} />
         <Route path="/about" element={<AboutLandingpage/>} />
          <Route path="/contact" element={<ContactLandingpage/>} />
            
             <Route path="/subservices/1" element={<Sublandingpage1 />} />
              <Route path="/subservices/2" element={<Sublandingpage2/>} />
               <Route path="/subservices/3" element={<Sublandingpage3/>} />
                <Route path="/subservices/4" element={<Sublandingpage4/>} />
                 <Route path="/subservices/5" element={<Sublandingpage5/>} />
                  <Route path="/subservices/8" element={<CardLandingpage/>} />
                
                    <Route path="/subservices/6" element={<Sublandingpage6/>} />
                     <Route path="/subservices/7" element={<Sublandingpage7/>} />

                     <Route path="/subservices/1/subdetailservice/1" element={<Subservicesbackimg />} /> 
                      <Route path="/subservices/2/subdetailservice/2" element={<Subservicesbackimg2 />} /> 
                       <Route path="/subservices/2/subdetailservice/3" element={<Subservicesbackimg3 />} /> 
                        <Route path="/subservices/2/subdetailservice/4" element={<Subservicesbackimg4 />} /> 
                         <Route path="/subservices/2/subdetailservice/5" element={<Subservicesbackimg5 />} /> 
                         <Route path="/subservices/5/subdetailservice/1" element={<Subservices5img1/>} /> 
                            <Route path="/subservices/5/subdetailservice/2" element={<Subservices5img2/>} />
                               <Route path="/subservices/5/subdetailservice/3" element={<Subservices5img3/>} />  
                                  <Route path="/subservices/5/subdetailservice/4" element={<Subservices5img4/>} /> 
                                    <Route path="/subservices/7/subdetailservice/7" element={<Subservices7/>} /> 
                         
                      
                        <Route path="/subservices/1/detail"
          element={<Subservicesbackimg />}
        />
        
       

          

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

