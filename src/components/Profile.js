import React, { Component } from 'react'
import $ from 'jquery';

// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import '../styles/profile.css';

export default class Profile extends Component {
    componentDidMount(){
        if($(window).width() < 481){
        //   enableBodyScroll($('body'));
          $('body').css("overflow", "scroll");
        }
    }
      
    render() {
        return (
            <div className="profile-container container">
                <p>We see our work as a collaboration with our clients, craftsman and engineers, to create individualized architectural experiences of beauty and endurance. Often developed within the historical context of New York City’s rich architectural heritage, our projects typically involve the preservation, reconstruction and reimagining of traditional design elements. Through sophisticated detailing, rich in texture and materiality, overlaid with light and color, we endeavor to create architectural works that fulfill and enrich the lives of the people who inhabit them.</p> 
 
                <p className="profile-list">Our services include:
                    Additions to existing buildings
                    <span>Alt 1 and Alt 2 Department of Buildings filings</span>
                    <span>Civil penalties</span>
                    <span>Certificates of Correction (COC)</span>
                    <span>Certificate of Occupancy (CO) applications and amendments</span>
                    <span>Construction administration</span>
                    <span>Façade work</span>
                    <span>Historic restoration/preservation, including presentations and approvals with the NYC Landmarks Preservation Commission and other preservation authorities having jurisdiction</span>
                    <span>Inspections and reports</span>
                    <span>Interior design</span>
                    <span>New construction projects</span>
                    <span>Property assessment reports</span>
                    <span>Stop Work Orders (SWO)</span>
                    <span>Violation removals</span>
                    <span>Zoning determinations.</span>
                </p>
            </div>
        )
    }
}
