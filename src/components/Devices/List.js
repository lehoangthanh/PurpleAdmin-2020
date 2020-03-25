import React from 'react';

const ListComponent = (props) => {
  const { routeActive } = props;
  return(
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
         <span className="page-title-icon bg-gradient-primary text-white mr-2">
           {
             _.isObject(routeActive.icon) ? <i className={"mdi"}>{routeActive.icon}</i> : <i className={routeActive.icon} />
           }
         </span>
          {
            routeActive.name
          }
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Tables</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Bordered table</h4>
            <p className="card-description"> Add class <code>.table-bordered</code>
            </p>
            <table className="table table-bordered">
              <thead>
              <tr>
                <th> #</th>
                <th> First name</th>
                <th> Progress</th>
                <th> Amount</th>
                <th> Deadline</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td> 1</td>
                <td> Herman Beck</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $ 77.99</td>
                <td> May 15, 2015</td>
              </tr>
              <tr>
                <td> 2</td>
                <td> Messsy Adam</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $245.30</td>
                <td> July 1, 2015</td>
              </tr>
              <tr>
                <td> 3</td>
                <td> John Richards</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "90%"}} aria-valuenow="90"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $138.00</td>
                <td> Apr 12, 2015</td>
              </tr>
              <tr>
                <td> 4</td>
                <td> Peter Meggik</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $ 77.99</td>
                <td> May 15, 2015</td>
              </tr>
              <tr>
                <td> 5</td>
                <td> Edward</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "35%"}} aria-valuenow="35"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $ 160.25</td>
                <td> May 03, 2015</td>
              </tr>
              <tr>
                <td> 6</td>
                <td> John Doe</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "65%"}} aria-valuenow="65"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $ 123.21</td>
                <td> April 05, 2015</td>
              </tr>
              <tr>
                <td> 7</td>
                <td> Henry Tom</td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="20"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </td>
                <td> $ 150.00</td>
                <td> June 16, 2015</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListComponent;