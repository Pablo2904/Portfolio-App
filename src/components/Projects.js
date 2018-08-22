import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import weatherapp from '../img/weatherapp.jpg';
import recipeapp from '../img/recipeapp.jpg';

const Projects = () => (
  <div className="projectWrapper">
    <Tabs className="container-fluid">
      <TabList className="d-flex pl-0 justify-content-center">
        <Tab>Weather App</Tab>
        <Tab>Recipe App</Tab>
      </TabList>

      <TabPanel>
        <div className="projectWrapper_card py-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Weather App</h2>
              <div className="projectWrapper__info">
                <p className="card-text">My first Project with React Library. It using external weather API. With it u can easily check weather in your region! Just type name of your city and country in english</p>
                <p>Technology Stack:</p>
                <ul className="pl-0">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>Fetch API</li>
                  <li>React</li>
                </ul>
                <img className="img-fluid "src={weatherapp} alt="Weather app"/>
              </div>

              <div className="projectWrapper_buttons d-flex justify-content-around flex-wrap">
                <a href="">github</a>
                <a href="">Live demo</a>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="projectWrapper_card py-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Recipe App</h2>
              <div className="projectWrapper__info">
                <p className="card-text">My second App where React is apply. It also using React-Router Module to handle subpages. I use food2fork external API to recevie data</p>
                <p>Technology Stack:</p>
                <ul className="pl-0">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>Fetch API</li>
                  <li>React with Router</li>
                </ul>
                <img className="img-fluid "src={recipeapp} alt="Recipe app"/>
              </div>

              <div className="projectWrapper_buttons d-flex justify-content-around flex-wrap">
                <a href="">github</a>
                <a href="">Live demo</a>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>



    </Tabs>
  </div>
);

export default Projects;
