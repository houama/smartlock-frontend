import * as React from 'react';
import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return(
    <div>
      <Appbar/>
      <Sidebar
        selectedDrawer = "Dashboard"
      />
    </div>
  )
}

export default Dashboard