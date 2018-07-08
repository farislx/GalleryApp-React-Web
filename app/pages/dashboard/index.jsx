import React from 'react';
import AuthenticationComponent from '../../components/base/AuthenticationComponent';
import { Link } from 'react-router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../dashboard/style.css'
import { connect } from 'react-redux';
import { Map } from 'immutable';
import ActionBuilder from '../../utils/actionCreator';

class Dashboard extends AuthenticationComponent {

    render() {
        return (<div>
		<div className="container">
        <div className="row">
        <div className="col-sm-4">
            <div className="form-group">
            <label for="usr">Title:</label>
            <input type="text"  name="title" value={this.props.data.get("title")}  onChange={this.props.onChange} className="form-control" />
            </div>
        </div>
        <div className="col-sm-4">
            <div className="form-group">
            <label for="usr">Description:</label>
            <input type="text"  name="description" value={this.props.data.get("description")}  onChange={this.props.onChange} className="form-control" />
            </div>   
        </div>
        <div className="col-sm-4">
            <br/>
                <input type="submit" className="btn btn-info" onClick={this.props.onSearch.bind(this)} value="Search"/>
        </div>
        </div>        
       
      
        <div className="row">
            {this.props.data.get("tempShotList").toArray().map(( listValue, index ) => {
                                                return (
                                                 <div className="col-sm-4">
                                                 <img src={listValue.imageUrl}/>
                                                 <h3>{listValue.title}</h3>
                                                 {listValue.description}
                                            </div>

                                                );
                                            })}
        </div>

       </div>
        </div>)
    }

    
    componentDidMount() {
        this.props.init();
    }
}

let mapStateToProps = function (state) {

    return {
        data: Map(state.dashboard.home)
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        init: function () {
            dispatch(ActionBuilder("DASHBOARD", "INIT",  { name: "init" }));
        },
        onChange: function (e) {
            let name=e.target.getAttribute("name");
            let value=e.target.value;
            dispatch(ActionBuilder("DASHBOARD", "INIT", { 'name':name, 'value':value }));
        },
        onSearch: function () {
            dispatch(ActionBuilder("DASHBOARD", "INIT", { name:'search'}));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
