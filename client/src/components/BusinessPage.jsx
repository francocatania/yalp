import React from 'react';
import Search from './Search.jsx'
import BusinessInfo from './BusinessInfo.jsx';
import BusinessMap from './BusinessMap.jsx'
import PhotoFeed from './PhotoFeed.jsx';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendReviews: [],
      nonFriendReviews: []
    }
  }



  render() {
    return (
      <div className="businessPage">
        <Search getBusinesses={this.props.getBusinesses}/>
        <BusinessInfo business={this.props.business}/>
        <div id="businessMap"><BusinessMap business={this.props.business}/></div>
        <PhotoFeed />
        <div className="addReview">
          <AddReview />
        </div>
        <div className="reviews">
          <Reviews />
        </div>
      </div>
    )
  }
}

export default BusinessPage;
