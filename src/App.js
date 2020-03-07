import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import logo from "./logo.svg";
import ksImage from "./images/ksImage.jpg";
import ssImage from "./images/ssImage.jpg";
import pvImage from "./images/pvImage.jpg";
import adImage from "./images/adImage.jpg";
import gsImage from "./images/gsImage.jpg";
import "./App.css";

const App = () => {
  const data = [
    {
      name: "Karthik Sawanth"
    },
    {
      name: "Mrudula Sawanth"
    },
    {
      name: "Advaitha Sawanth"
    },
    {
      name: "Gautham Sawanth"
    }
  ];

  const columns = [
    {
      expander: true,
      Expander: ({ isExpanded, ...row }) => (
        <>
          <div>{isExpanded ? <span>[-]</span> : <span>[+]</span>}</div>
        </>
      ),
      style: {
        cursor: "pointer",
        fontSize: 20,
        padding: "0",
        textAlign: "center",
        userSelect: "none"
      },
      //width: 400
    },
    {
      /* Header: () => (
        <>
          <b>Family Members</b>
        </>
      ), */
      accessor: "name",
      //width: 800
    }
  ];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="sf-page-header">Karthik's Family</div>
      <div>
        <ReactTable
          data={data}
          columns={columns}
          showPagination={false}
          sortable={false}
          minRows={0}
          className="-striped -highlight"
          SubComponent={row => {
            if (row.index === 0)
              return (
                <>
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="sf-image sf-zoom">
                        <img src={ksImage} alt="logo" />
                      </span>
                      <span className="sf-aboutme sf-pt-10">
                        <p className="sf-para">
                          <b>Career:</b> Experienced Senior Technology
                          Consultant with a demonstrated history of working in
                          areas; Software Development Life <br />
                          Cycle, Requirements Analysis, Agile, Web application
                          development, Automation and SQL with database
                          analysis.
                        </p>
                        <p className="sf-para">
                          <b>Hobbies:</b> Playing/watching Cricket
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              );
            else if (row.index === 1)
              return (
                <>
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="sf-image sf-zoom">
                        <img src={pvImage} alt="logo" />
                      </span>
                      <span className="sf-aboutme sf-pt-10">
                        <p className="sf-para">
                          <b>Career:</b> Home maker. Busy with our two kids.
                        </p>
                        <p className="sf-para">
                          <b>Hobbies:</b> Reading books
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              );
            else if (row.index === 2)
              return (
                <>
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="sf-image sf-zoom">
                        <img src={adImage} alt="logo" />
                      </span>
                      <span className="sf-aboutme sf-pt-10">
                        <p className="sf-para">
                          <b>About me:</b> Elder daughter in Karthik Sawanth's family. Studying 1st grade in Voxpop International school.
                        </p>
                        <p className="sf-para">
                          <b>Hobbies:</b> Playing Cricket, Kuchipudi dance, Skating, Drawing.
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              );
              else if (row.index === 3)
              return (
                <>
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="sf-image sf-zoom">
                        <img src={gsImage} alt="logo" />
                      </span>
                      <span className="sf-aboutme sf-pt-10">
                        <p className="sf-para">
                          <b>About me:</b> Youngest child in Karthik Sawanth's family
                        </p>
                        <p className="sf-para">
                          <b>Hobbies:</b> Play, eat, sleep and repeat
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              );
            /* else if (row.index === 4)
              return (
                <>
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="sf-image sf-zoom">
                        <img src={ssImage} alt="logo" />
                      </span>
                      <span className="sf-aboutme sf-pt-10">
                        <p className="sf-para">
                          <b>Career:</b> Experienced Senior Technology
                          Consultant with a demonstrated history of working in
                          areas; Software Development Life <br />
                          Cycle, Requirements Analysis, Agile, Web application
                          development, Automation and SQL with database
                          analysis.
                        </p>
                        <p className="sf-para">
                          <b>Hobbies:</b> Playing/watching Cricket
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              ); */
          }}
        />
      </div>
    </div>
  );
};

export default App;
