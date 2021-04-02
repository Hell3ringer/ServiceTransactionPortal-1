import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./OS.css";

function OccupationSearch() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/professionals/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.occupation.includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading) {
    return <p>Loading Occupations...</p>;
  }

  return (
    <div className="Search">
      <h1>List of professionals</h1>
      <input
        type="text"
        placeholder="Search by Occupation..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))}
    </div>
  );
}

const CountryDetail = (props) => {
  const { occupation, fullName, phoneNo } = props;

  return (
    <>
          
          <div className='ml-5 mt-3'>
            <Card style={{ width: '14rem' }}>
              <Card.Body>
                <Card.Title style={{color: 'black' }}>{fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{occupation}</Card.Subtitle>
                <Card.Text style={{color: 'black'}}>
                <small>{phoneNo} </small>
                </Card.Text>
              </Card.Body>
           </Card>
      </div>
    </>
  );
};




const rootElement = document.getElementById("root");
ReactDOM.render(<OccupationSearch />, rootElement);
export default OccupationSearch;