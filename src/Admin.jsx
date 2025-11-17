import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { addEvent, deleteEvent, editEvent, getEvent } from "./Services/allApi";
import Swal from "sweetalert2";
import Table from "react-bootstrap/Table";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "./admin.css";

const Admin = () => {
  const [event, setEvent] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventArr, setEventArr] = useState([]);
  const [eventId, setEventId] = useState(null);

  useEffect(() => {
    loadData();
    console.log(eventArr);
  }, []);

  const clickAdd = async () => {
    let reqBody = {
      event: event,
      Desc: eventDesc,
      date: date,
      startTime: startTime,
      endTime: endTime,
    };
    let apiRes = await addEvent(reqBody);

    if (event && eventDesc && date && startTime && endTime) {
      if (apiRes.status === 201) {
        Swal.fire({
          title: "Event Added",
          icon: "success",
          draggable: true,
        });
        remove();
        loadData();
      } else {
        Swal.fire({
          title: "Event added Failed",
          icon: "error",
          draggable: true,
        });
      }
    } else {
      Swal.fire({
        title: "Enter the Fields",
        icon: "error",
        draggable: true,
      });
    }
  };

  const loadData = async () => {
    let apiRes = await getEvent();

    if (apiRes.status == 200) {
      setEventArr(apiRes.data);
    }
  };

  const clickDelete = async (id) => {
    let apiRes = await deleteEvent(id);
    if (apiRes.status == 200) {
      Swal.fire({
        title: "Event Deleted",
        icon: "Success",
        draggable: true,
      });
      loadData();
    }
  };

  const clickEdit = (obj) => {
    setEvent(obj.event);
    setDate(obj.date);
    setEndTime(obj.endTime);
    setStartTime(obj.startTime);
    setEventDesc(obj.Desc);
    setEventId(obj.id);
  };

  const editMain = async() =>{
     let reqBody = {
      event: event,
      Desc: eventDesc,
      date: date,
      startTime: startTime,
      endTime: endTime,
    };
    let apiRes = await editEvent(eventId,reqBody)
    if(apiRes.status == 200){
        remove()
        loadData()
        setEventId(null)
           Swal.fire({
        title: "Event Edited",
        icon: "Success",
        draggable: true,
      });
    }
  }

  const remove = () => {
    setEvent("");
    setDate("");
    setEndTime("");
    setStartTime("");
    setEventDesc("");
  };

  return (
    <div className="admin-container">
      <div className="form-section">
        <h1>Add Events</h1>
        <p>Add your Events</p>

        <div className="form-grid">
          <TextField
            id="Event Name"
            label="Event Name"
            variant="outlined"
            onChange={(e) => setEvent(e.target.value)}
            value={event}
          />
          <TextField
            id="Event Description"
            label="Event Description"
            variant="outlined"
            onChange={(e) => setEventDesc(e.target.value)}
            value={eventDesc}
          />

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div className="form-group">
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              onChange={(e) => setStartTime(e.target.value)}
              value={startTime}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              onChange={(e) => setEndTime(e.target.value)}
              value={endTime}
            />
          </div>
        </div>
        {eventId ? (
          <button onClick={editMain} className="add-button">Edit</button>
        ) : (
          <button className="add-button" onClick={clickAdd}>
            Add Event
          </button>
        )}
      </div>

      <div className="table-section">
        <h1>Current Events</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>Description</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventArr.length > 0 ? (
              eventArr.map((each, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{each.event}</td>
                  <td>{each.Desc}</td>
                  <td>{each.date}</td>
                  <td>{each.startTime}</td>
                  <td>{each.endTime}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="action-btn edit-btn"
                        onClick={() => clickEdit(each)}
                      >
                        <CiEdit />
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => clickDelete(each.id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-events">
                  <h2>No Events Found</h2>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
