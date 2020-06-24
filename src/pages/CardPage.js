import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Card from '../components/Card';
import dataJson from '../assets/Data.json';

export default function CardPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row pt-5 mt-5">
          {dataJson.dataEvent.map((key) => {
            return (
              <Card
                location={key.location}
                title={key.title}
                date={key.date}
                participant={key.Participant}
                note={key.note}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
