import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OS.css";
import StarRating from "../feedback/StarRating";
import view_feed_prof from "../feedback/View_feed_prof";

function OccupationSearch() {
  const [professionals, setprofessionals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchByCity, setSearchByCity] = useState("");
  const [searchByLocation, setsearchByLocation] = useState("");
  const [filteredprofessionals, setFilteredprofessionals] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/professionals/all")
      .then((res) => {
        setprofessionals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredprofessionals(
      professionals.filter((element) =>
        element.occupation.toLowerCase().includes(searchByCity.toLowerCase())
      ).filter((element) =>
        element.location.toLowerCase().includes(searchByLocation.toLowerCase())
      )
    );
  }, [searchByCity,searchByLocation, professionals]);

  if (loading) {
    return <p>Loading Occupations...</p>;
  }

  return (
    <div className="Search">
      <h1 style={{color:'black', textDecoration:'underline' }}>Search for Professionals</h1>
      <input
        className="search-input-city p-2 my-1 rounded"
        type="text"
        placeholder="Search by City..."
        onChange={(e) => setsearchByLocation(e.target.value)}
      />
      <input
        className="search-input-occupation p-2 my-1 rounded"
        type="text"
        placeholder="Search by Occupation..."
        onChange={(e) => setSearchByCity(e.target.value)}
      />
      {filteredprofessionals.map((element, idx)  => (
        <ProfessionalDetail key={idx} {...element} />
      ))}
     {filteredprofessionals.length===0 ? <h2>NO Results :(</h2> : <h2></h2>}
    </div>
  );
}

const ProfessionalDetail = (props) => {
  
  
  const {pid,occupation, fullName, phoneNo, location, email } = props;

  return (
    <>

          <div className='mt-3'>
            <Card style={{ width: '40rem' }}>
              <Card.Body>
                <Card.Title style={{color: 'black' }}>Name: {fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Occupation: {occupation}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" style={{color: 'black'}}>
                  City: {location}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" style={{color: 'black'}}>
                Contact: {phoneNo} 
                </Card.Subtitle>
<<<<<<< HEAD
                {/* <Card.Img variant="bottom" className="im" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/worker.png"/> */}
=======
                
>>>>>>> 94d5a1890d7db39ea2e6a50530481a7f0dfb9d54
        <Accordion defaultActiveKey="0">
      <Row className="m-0">
        <Col className="">
              <Row className="px-0" style={{padding:'0px'}}>
                <Accordion.Toggle as={Button} className="px-0" variant="link" eventKey="1">
                    Click to View More
                </Accordion.Toggle>
              </Row>
    <Accordion.Collapse eventKey="1">
      <Row className="p-2" style={{color:'black'}}>Email: {email}</Row>           
    </Accordion.Collapse>
    <Accordion.Collapse eventKey="1">
      <Row className="p-2" style={{color:'black'}}>{pid}</Row>           
    </Accordion.Collapse>
    <Accordion.Collapse eventKey="1">
      <Row className="p-2" style={{color:'black'}}><view_feed_prof props={pid}/></Row>           
    </Accordion.Collapse>
    </Col>
    </Row>
</Accordion>
              </Card.Body>
           </Card>
      </div>
    </>
  );
};




const rootElement = document.getElementById("root");
ReactDOM.render(<OccupationSearch />, rootElement);
export default OccupationSearch;