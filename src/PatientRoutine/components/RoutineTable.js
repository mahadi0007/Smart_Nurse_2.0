import React from "react";

import "./RoutineTable.css";

class RoutineTable extends React.Component {
  render() {
    return (
      
        <div className="container tableDesign">
          <table className="table table-striped table-bordered table-hover table-responsive-sm">
            <thead className="thead-dark">
              <tr>
                <th>Routine Item</th>
                <th>Item Name</th>
                <th>Unit</th>
                <th>Start Date</th>
                <th>End date</th>
                <th>Community</th>
                <th>b/a meal</th>
                <th>Time</th>
                <th>Notification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>medicine</td>
                <td>napa</td>
                <td>1</td>
                <td>1/06/2020</td>
                <td>1/07/2020</td>
                <td>maam</td>
                <td>before meal</td>
                <td>30</td>
                <td>before 15 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      
    );
  }
}

export default RoutineTable;
