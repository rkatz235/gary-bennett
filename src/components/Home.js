import React, { Component } from 'react'
import '../styles/home.css';
import 'react-slideshow-image/dist/styles.css'
import $ from 'jquery'
import { Fade } from 'react-slideshow-image';

export default class Home extends Component {
    
    constructor(){
        super();
        let images;
        let imagesList; 
        //mobile immages
        if ( $( window ).width() < 481 ) {
            images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"];
            //1. change images directory
            imagesList = images.map((item) => {
                return("../img/Mobile/" + item)
            })
        } else {
            images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg"];
            imagesList = images.map((item) => {
                return("../img/Desktop/" + item)
            })
        }
        this.imgs = imagesList;
        this.state = {
            imageIndex: 0
        }
        this.changeImage = this.changeImage.bind(this);
    }
    componentDidMount(){
        // $("#root").addClass("fix-root");
        // if($(window).width() < 481){
        //     // disableBodyScroll($('body'));
        //     $("body").css("overflow", "hidden");
        // }
    }
    componentWillUnmount(){
        // $("#root").removeClass("fix-root");
        
    }
    
    changeImage() {
        if (this.state.imageIndex === this.imgs.length - 1) {
          this.setState({ imageIndex: 0 });
        } else {
          this.setState({ imageIndex: this.state.imageIndex + 1 });
        }
      }
    
    render() {
        return (
            <div className="home-container container">

                <div className="slide-container">
                    <Fade duration={3000} transitionDuration={2000} >
                        {this.imgs.map((item, i) => {
                            return(
                                <div className="each-fade" key={i}>
                                    <img alt="background" src={item} />
                                </div>
                            )
                        })}
                    </Fade>
                </div>
                <div className="logo-container">
                    
                    <img id="home-logo" alt="Gary Bennett Architecture" src={require("../img/Logo/Logo.png")} />
                </div>
            </div>
        )
    }
}
