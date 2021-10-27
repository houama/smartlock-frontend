import * as React from 'react';
import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';

const Nodes = () => {
  return(
    <div>
      <Appbar/>
      <Sidebar
        selectedDrawer = "Nodes"
      />
    </div>
  )
}

export default Nodes