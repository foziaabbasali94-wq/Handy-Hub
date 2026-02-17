
import Herosection from '../component/Herosection';
import Services from '../component/Services'

import MaintenancePage from '../component/Maintenacepage'

import Work from '../component/Work';
import QueryForm from '../component/Queryform';

function HomeLandingpage() {
  return (
    <div>
         <Herosection />
      <Services/>
      <Work/>
      <MaintenancePage/>
      <QueryForm/>
      
    </div>
  )
}

export default HomeLandingpage
