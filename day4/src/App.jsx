import { useState } from 'react'
import './App.css'
import Notification from './components/Notification/Notification'
import ChildComp from './components/Notification/Child';
import Table from './components/Table/Table';
import Tabs from './components/Tabs/Tabs';
import Accordion from './components/Accordion/Accordion';
import Carousel from './components/Carousel/Carousel';

const columns = [
  {
    label: "First Name",
    value: "firstName"
  },
  {
    label: "Last Name",
    value: "lastName"
  },
  {
    label: "Age",
    value: "age"
  },
]


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const tabs = [
  {
      title: "Photos",
      data: "Photos Lorem Ipsum"
  },
  {
      title: "Item Two",
      data: "Item 2 Lorem Ipsum"
  },
  {
      title: "Item Three",
      data: "Item 3 Lorem Ipsum"
  }
]


const images = [
  {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
  },
  {
      src: "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
  },
  {
      src: "https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png",
  }
]

function App() {
  const [visible, setVisible] = useState(false);
  const [toastText, setToastText] = useState("Lorem Ipsum");
  const [delay, setDelay] = useState(3000);

  const handleToggle = () => {
    setVisible(!visible);
  }

  const toast = (text, del = 3000) => {
    setToastText(text);
    setDelay(del);
    console.log(del, text);
    setVisible(true);
  }

  return (
    <>
      <section>
        <h1>Notification</h1>
        <Notification visible={visible} setVisible={setVisible} closeAutomatically={true} delay={delay} text={toastText}/>
        <button onClick={handleToggle}>Toggle</button>
        <ChildComp toast={toast} />
      </section>

      <section>
        <h1>Table Component</h1>
        <Table rows={rows} columns={columns}/>
      </section>

    <section>
      <h1>Tabs Component</h1>
      <Tabs tabs={tabs} defaultSelect={1}/>
    </section>

    <section>
      <h1> Accordion Component</h1>
      <Accordion title={"Hello World"} data={"Lorem Ipsum Dolor"}/>
    </section> 

    <section>
      <h1>Carousel</h1>
      <Carousel images={images} defaultImageIndex={2}/>
    </section>
    </>
  )
}

export default App
