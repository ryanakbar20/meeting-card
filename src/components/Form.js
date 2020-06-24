import React, { useState, useEffect } from 'react';
import Image from '../assets/image.jpg';
import firebase from '../config/Firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Form() {
  const [Data, setData] = useState({
    title: '',
    location: '',
    participant: '',
    date: '',
    note: '',
  });
  const [Alert, setAlert] = useState(false);
  const onChange = (event) => {
    setData({
      ...Data,
      [event.target.name]: event.target.value,
    });
    console.log(Data);
  };

  const handleImage = (e) => {
    const image = e.target.files[0];
    console.log(File);
  };
  const handleDate = (date) => {
    setData({
      ...Data,
      date,
    });
  };
  const handleSubmit = () => {
    firebase
      .database()
      .ref('/data/')
      .push({
        title: Data.title,
        location: Data.location,
        participant: Data.participant,
        date: Data.date,
        note: Data.note,
      })
      .then(() => {
        setData('');
        setAlert(true);
      })
      .catch((Err) => console.log(Err));
  };
  return (
    <div className="container bg-light p-5 mt-5 rounded">
      {Alert && (
        <div class="alert alert-success" role="alert">
          Sukses Menambah Data Meeting!
        </div>
      )}
      <div className="row">
        <div className="col-12 col-lg-6">
          <form>
            <div className="row">
              <div className="form-group mr-3">
                <label for="exampleInputEmail1">Title</label>
                <input
                  value={Data.title}
                  type="text"
                  name="title"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Title"
                  onChange={onChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Location</label>
                <input
                  value={Data.location}
                  type="text"
                  name="location"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={onChange}
                  placeholder="Enter Location"
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group mr-3">
                <label for="exampleInputEmail1">Participant</label>
                <input
                  name="participant"
                  value={Data.participant}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter Participant"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Date</label>
                <div className="form-control">
                  <DatePicker selected={Data.date} onChange={handleDate} />
                </div>
              </div>
            </div>
            <div className="row">
              <input
                type="file"
                onChange={handleImage}
                name="image"
                class="form-control"
                placeholder="Enter Date"
              />
            </div>
            <div className="row mt-3">
              <textarea
                class="form-control"
                onChange={onChange}
                id="exampleFormControlTextarea1"
                rows="4"
                name="note"
                value={Data.note}
              ></textarea>
            </div>
            <div
              onClick={handleSubmit}
              class="btn btn-primary btn-block d-block mt-5"
            >
              Submit
            </div>
          </form>
        </div>
        <div className="d-none d-lg-block col-6">
          <div>
            <img
              src={Image}
              alt="Meet"
              width="100%"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
