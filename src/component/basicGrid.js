import * as React from "react";
import "./Grid2.css";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Barchart from "./Bar-chart";
import Piechart from "./piechart";
import Tablecontent from "./tablecontent";
// import { Doughnut } from 'react-chartjs-2';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

const Tab = [
  { id: 1, title: "Dashboard", icon: "/img-icon/ui-checks-grid.svg" },
  { id: 2, title: "Product", icon: "/img-icon/app-indicator.svg" },
  { id: 3, title: "Customers", icon: "/img-icon/person.svg" },
  { id: 4, title: "Income", icon: "/img-icon/cash-coin.svg" },
  { id: 5, title: "Promote", icon: "/img-icon/patch-plus.svg" },
  { id: 6, title: "Help", icon: "/img-icon/question-square-fill.svg" },
];

const CardItem = [
  {
    id: 1,
    title: "Earning",
    price: "$198k",
    rate: 37.8,
    icon: "/img-icon/images.png",
  },
  {
    id: 2,
    title: "Order",
    price: "$198k",
    rate: 37.8,
    icon: "/img-icon/order.png",
  },
  {
    id: 3,
    title: "Balance",
    price: "$198k",
    rate: 37.8,
    icon: "/img-icon/download.png",
  },
  {
    id: 4,
    title: "Sales",
    price: "$198k",
    rate: 37.8,
    icon: "/img-icon/balance.png",
  },
];

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="grid-container" container spacing={1}>
        <div className="grid1" item xs={4}>
          <div className="g1">
            <div className="Dash-board">
              <img src="/img-icon/nut-fill.svg" alt="nut" />
              <h2>Dashboard</h2>
            </div>
            {Tab.map((item) => {
              return (
                <div className="item-icon">
                  <div style={{ marginRight: "10px" }}>
                    <img src={item.icon} alt="item.icon" />
                  </div>
                  <div className="k1" key={item.id}>
                    <span className="s1">{item.title}</span>
                  </div>
                </div>
              );
            })}
            <div className="MenuItem">
              <div className="Image">
                <img src="/img-icon/download.jpg" alt="project manager" />
              </div>

              <div className="name-item">
                <h3 className="heading">Evano</h3>
                <p className="Para">Project manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Grid2" item xs={8}>
          <div className="Row1">
            <div className="Row1-nav">
              <div>
                <span>Hello Shahrukh</span>
              </div>
              <div>
                {" "}
                <img src="/img-icon/waving-hand.svg" alt="waving" />
              </div>
            </div>
            <div className="Row1-search">
              <form>
                <input type="search" placeholder="Search.." />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="Row2">
            {CardItem.map((item) => {
              return (
                <div className="Row2-item" key={item.id}>
                  <div >
                    <div className="cardImg">
                      <img src={item.icon} alt="item.title" />
                    </div>
                  </div>
                  <div className="spanItem">
                    <span className="title">{item.title}</span>
                    <span className="Price">{item.price}</span>
                    <span className="rate">{item.rate} this month </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Row3">
            <div className="Row3-item">
              <div className="Chart">
                  <div className="chart-heading">
                  <span className="chart-heding-span">Overview</span>
                  <span className="chart-heding-span2">Monthly Earning</span>
                </div>
                <div className="chart-left"><span>Quarterly</span>
                </div>
              </div>
              <div>
                <Barchart />
              </div>
            </div>
            <div className="Row3-item2">
              <div className="Row3-span">
                <span><h3>Customers</h3></span>
                <span className="para">Customers that buy product</span>
              </div>
              <div className="piechart">
              <Piechart/>
              </div>
            </div>
          </div>
          <div className="Row4">
            <h3>Product sell</h3>
          <Tablecontent/>
          </div>
        </div>
      </div>
    </Box>
  );
}
