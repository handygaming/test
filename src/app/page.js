"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./comps/Card";
import { useEffect, useState } from "react";

// import material ui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const axios = require("axios");
var moment = require("moment");
export default function Home() {
  let [date, setdate] = useState("00-00-0000");
  let [times, settimes] = useState({
    Fajr: "00:00",
    Dhuhr: "00:00",
    Asr: "00:00",
    Maghrib: "00:00",
    Isha: "00:00",
  });
  let [city, setcity] = useState("Cairo");
  async function getdata() {
    let respose = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5`
    );
    settimes(respose.data.data.timings);
  }
  useEffect(() => {
    getdata();
    setdate(moment().format("DD-MM-YYYY"));
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.maincard}>
        <div style={{ marginBottom: "25px" }}>
          <p>{date}</p>
          <h1>EGYPT</h1>
        </div>
        <hr style={{ width: "100%" }} />
        <div style={{ width: "100%" }}>
          <Card name="الفجر" time={times.Fajr} />
          <hr style={{ width: "100%" }} />
          <Card name="الظهر" time={times.Dhuhr} />
          <hr style={{ width: "100%" }} />
          <Card name="العصر" time={times.Asr} />
          <hr style={{ width: "100%" }} />
          <Card name="المغرب" time={times.Maghrib} />
          <hr style={{ width: "100%" }} />
          <Card name="العشاء" time={times.Isha} />
        </div>
      </div>
    </div>
  );
}
