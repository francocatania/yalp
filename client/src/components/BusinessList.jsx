import React from 'react';
import ReactDOM from 'react-dom';
import BusinessEntry from './BusinessEntry.jsx';
import { Link } from 'react-router-dom';
import MapContainer from './GoogleMap.jsx';
import axios from 'axios';

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: []};
  }
  componentWillMount() {
    document.body.style.background = "url('wood.jpg')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "repeat-y";
  }

  getBusinesses(search, loc = `37.7749,-122.4194`) {
    let url = `/server/search/${search}/${loc}`;
    axios.get(url)
    .then(resp => {
      this.setState({searchResults: resp.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    let obj = (this.props.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
    this.getBusinesses(obj.search, obj.location);
  }

  getBusinessEntries() {
    const { favorites } = this.props;
    return this.state.searchResults.map(business => 
      <BusinessEntry
        business={business}
        key={business.id}
      />
    );
  }

  render() {
    return (
      <div id="businesses&map">
        <div id="businesses">
          {this.getBusinessEntries()}
        </div>
        <div id="map-container">
          <MapContainer businesses={this.props.businesses.data}/>
        </div>
      </div>
    )
  }
}

export default BusinessList;