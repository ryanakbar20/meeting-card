import React from 'react';

export default function Table({ data }) {
  return (
    <div className="container pt-5 mt-5">
      <div class="card shadow mb-4">
        <div class="card-header py-3"></div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Participant</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {data.map((key, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{key.title}</td>
                      <td>{key.location}</td>
                      <td>{key.date}</td>
                      <td>{key.Participant}</td>
                      <td>{key.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
