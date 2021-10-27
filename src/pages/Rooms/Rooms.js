import * as React from 'react';
import Appbar from '../../components/Appbar';
import Sidebar from '../../components/Sidebar';

const Rooms = () => {
  return(
    <div>
      <Appbar/>
      <Sidebar
        selectedDrawer = "Rooms"
      />
    </div>
  )
}

export default Rooms