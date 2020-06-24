import React from 'react';
import Image from '../assets/image.jpg';

export default function Card({ location, title, date, participant, note }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 bg-light rounded m-3 mb-5">
      <div className="row">
        <div className="col">
          <img
            src={Image}
            alt="Meet"
            width="100%"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="px-2 mt-3">
        <div className="row">
          <h4 className="text-primary">
            <span className="btn btn-primary btn-sm btn-circle">
              <i class="fas fa-map-marker-alt"></i>
            </span>{' '}
            {location}
          </h4>
        </div>
        <div className="row">
          <h3 className="text-black">{title}</h3>
        </div>
        <div className="row">
          <p>{date}</p>
        </div>
        <hr />
        <div className="row px-3">
          <div>
            <i class="fas fa-user-check"></i>
            <p className="mr-3">{participant}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p>{note}</p>
        </div>
      </div>
    </div>
  );
}
