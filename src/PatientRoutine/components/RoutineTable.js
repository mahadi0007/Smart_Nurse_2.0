import React from "react";
import {Table} from "react-bootstrap";


class RoutineTable extends React.Component{
    render(){
        return(
            <div>
                <div className="container tableDesign">
                <Table className="table table-striped table-bordered table-hover table-responsive">
                    <thead>
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
                            <th>medicine</th>
                            <th>napa</th>
                            <th>1</th>
                            <th>1/06/2020</th>
                            <th>1/07/2020</th>
                            <th>maam</th>
                            <th>before meal</th>
                            <th>30</th>
                            <th>before 15 mins</th>
                        </tr>
                    </tbody>

                </Table>
                </div>
            </div>
        );
    }
}

export default RoutineTable;