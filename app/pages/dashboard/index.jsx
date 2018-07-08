import React from 'react';
import AuthorizeComponent from '../../components/base/authorizeComponent';
import { Link } from 'react-router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../dashboard/style.css'
class Dashboard extends React.Component {

    render() {
        return (<div>
		<div className="container">
        <div className="row">
        <div className="col-sm-4">
            <div className="form-group">
            <label for="usr">Title:</label>
            <input type="text" className="form-control" />
            </div>
        </div>
        <div className="col-sm-4">
            <div className="form-group">
            <label for="usr">Description:</label>
            <input type="text" className="form-control" />
            </div>   
        </div>
        <div className="col-sm-4">
            <br/>
                <input type="submit" className="btn btn-info" value="Search"/>
        </div>
        </div>        
       

        <div className="row">
        <div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
             <h3>Title</h3>
             <p>The three headings above are aligned center, left and right.</p>
        </div>
        <div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div>
         <div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div>  
        <div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div><div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div><div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div><div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div><div className="col-sm-4">
             <img src="https://cdn.dribbble.com/users/2406183/screenshots/4796126/ii_home_3.jpg" alt="Free HTML5 Bootstrap template"/>
        </div>
</div>

       </div>
        </div>)
    }
}

module.exports = Dashboard