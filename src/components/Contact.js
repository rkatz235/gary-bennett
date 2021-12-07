import React, { Component } from 'react'
import $ from 'jquery';
import '../styles/contact.css';

export default class Contact extends Component {

    componentDidMount(){
        $("#root").addClass("fix-root");
        if($(window).width() < 481){
            // disableBodyScroll($('body'));
            $("body").css("overflow", "hidden");
        }
    }
    componentWillUnmount(){
        $("#root").removeClass("fix-root");
        
    }
    
    render() {
        return (
            <div className="contact-container container">
                <div className="contact-details">
                    <p>Gary Bennett Architecture</p>
                    <p>93 Underhill Avenue, Suite 5A</p>
                    <p>Brooklyn, NY 11238</p>
                    <p><a href="tel:347-234-2324">Office: 347.234.2324</a></p>
                    <p><a href="tel:609-334-2801">Mobile: 609.334.2801</a></p>
                    <p><a href="mailto: info@garybennettarchitecture.com">info@garybennettarchitecture.com</a></p>
                    <p>Find us on Instagram at <a href="https://www.instagram.com/garybennettarchitecture/?hl=en">garybennettarchitecture</a></p>
                    <p className="website-by">
                        <a href="https://www.linkedin.com/in/rachelxuanrongkatz/" target="__blank">Website by Rachel Katz</a>
                    </p>
                </div>
                
            </div>
        )
    }
}
