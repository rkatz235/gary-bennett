import React, { Component } from 'react'
import '../styles/work.css';
import '../styles/work_slide.css';
import $ from 'jquery';
import "../img/Arrows/Left.1.png";
import "../img/Arrows/Right.1.png";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

export default class Work extends Component {
    constructor(props) {
        super(props);
        this.changeProject = this.changeProject.bind(this);
        this.populateImgDir = this.populateImgDir.bind(this);
        //-1 for project selection page
        this.state = {
            project: -1
        }
        let numProjects = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
        let alpha = "abcdefghijklmnopqrstuv".split("");
        let slug = "../img/Work/";

        //populate imgDir
        // this.imgDir = [];
        // numProjects.forEach((item, i) => {
        //     this.imgDir.push({
        //         key: slug + item + "/" + item + "_thumbnail.jpg",
        //         value: alpha.map((str, i) => {
        //             let curFile = slug + item + "/" + item + str + ".jpg";
                    
        //             return curFile;
        //         })
        //     })
        // });

        //populate imgDir by hand 
        this.imgDir = this.populateImgDir();
        console.log(this.imgDir);
    }

    //populates the image directory - hardcodes the number of photos in alpha
    populateImgDir(){
        let newDir = [];
        let slug = "../img/Work/";
        let item = "01";
        let alpha = "abcdefgh".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "02";
        alpha = "abcdefgh".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "03";
        alpha = "abcde".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "04";
        alpha = "abcdefgh".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "05";
        alpha = "abcdef".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "06";
        alpha = "abcdefghijkl".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "07";
        alpha = "abcdefg".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "08";
        alpha = "abcdefghijkl".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "09";
        alpha = "abcde".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "10";
        alpha = "abcdefghijkl".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "11";
        alpha = "abcdefghijklmnopq".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "12";
        alpha = "abcd".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "13";
        alpha = "abcd".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "14";
        alpha = "abc".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "15";
        alpha = "a".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "16";
        alpha = "ab".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "17";
        alpha = "abcdef".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        item = "18";
        alpha = "abcde".split("");
        newDir.push({
            key: slug + item + "/" + item + "_thumbnail.jpg",
            value: alpha.map((str, i) => {
                let curFile = slug + item + "/" + item + str + ".jpg";
                return curFile;
            })
        })
        return newDir;
    }

    componentWillUnmount(){
        $(".page-container").removeClass("white").removeClass("hide-nav");
        $("footer").removeClass("hide-footer");

        //restore menu
        $("#arrow-menu").css("display", "none");
        $("#hamburger-menu").css("display", "block");

        //remove slide counter
        if($(".slide-counter").length > 0) {
            $(".slide-counter")[0].remove();
        }
        
    }

    componentDidMount(){
        // if($(window).width() < 481){
        //     //   enableBodyScroll($('body'));
        //       $('body').css("overflow", "scroll");
        // }
        $('body').css("overflow", "scroll");
    }
    
    componentDidUpdate(){
        //remove slide counter or reset slide counter
        if($(".slide-counter").length > 0) {
            $(".slide-counter")[0].remove();
        }
        if(this.state.project > -1){
            if($(window).width() < 481){
                //   enableBodyScroll($('body'));
                  $('body').css("overflow", "hidden");
                  $("#root").addClass("fix-root");
            }
            //get the number of images in the current project
            let numImages = this.imgDir[this.state.project].value.length > 10 ? this.imgDir[this.state.project].value.length : "0" + this.imgDir[this.state.project].value.length
            
            let slideDetails = $(`
                    <div class="slide-counter">
                        <div class="arrows"></div>
                        <p><span id="image-number">01</span>/${numImages}</p>
                    </div>  
                `)
            
            $("nav").append(slideDetails);
            //hide the footer 
            $("footer").addClass("hide-footer");

            //change background to white 
            $(".page-container").addClass("white").addClass("hide-nav");

            // append arrows if not mobile
            if(!window.matchMedia("(max-width: 480px)").matches){
                $(".slide-counter .arrows").append($(".default-nav[data-type='prev']"));
                $(".slide-counter .arrows").append($(".default-nav[data-type='next']"));
                // $(".default-nav[data-type='prev']").append($("<img src='../img/Arrows/Left.New.1.png' />"));
                // $(".default-nav[data-type='next']").append($("<img src='../img/Arrows/Right.New.1.png' />"));
            }
        } else {
            if($(window).width() < 481){
                //enableBodyScroll($('body'));
                  $('body').css("overflow", "scroll");
                  $("#root").removeClass("fix-root");

            }
            //restore footer and change background to grey
            $("footer").removeClass("hide-footer");
            $(".page-container").removeClass("white").removeClass("hide-nav");

        }
    }
    
    changeProject(i){
        //show full project
        if(i > -1) {
            //change menu functionality
            $("#nav-list").addClass("is-active");
            $("#hamburger-menu").css("display", "none");
            $("#arrow-menu").css("display", "block").addClass("is-active");

            $("#arrow-menu").on('click',(e) => {
                this.changeProject(-1)
            })
        }  else {
            //restore menu
            $("#nav-list").addClass("is-active");
            $("#arrow-menu").css("display", "none");
            $("#hamburger-menu").css("display", "block");          
        }
        this.setState({
            project: i
        })
    }
    
    render() {
        //show current project https://github.com/femioladeji/react-slideshow
        if(this.state.project > -1){
            let fadeShow = (
                <Fade duration={3000} transitionDuration={2000} onChange={() => {
                    var curImage = parseInt($(".react-slideshow-fade-images-wrap > div[aria-hidden=false]").attr("data-index")) + 1;
                    curImage > 9 ? $("#image-number").text(curImage) : $("#image-number").text("0" + curImage);
                
                    }}>
                    { this.imgDir[this.state.project].value.map((each, index) => {
                        try {
                            return(<img key={index} alt="project example" style={{width: "100%"}} src={each} />)
                        } catch(err) {
                            console.log("meh", err);
                            return(null)
                        }
                    }) }
                    
                </Fade>
            )
            return(
                <div className="slide-container full-project container">
                    { fadeShow }
                </div>
            )
        //show all projects
       } else {
            return (
                
                <div className="work-container container">
                    <div className="thumb-container">
                        {
                            this.imgDir.map((item, i) => {

                                return(
                                    <div className="thumb" key={i}>
                                        <img alt="click to view project" onClick={() => this.changeProject(i)} src={item.key} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
       }        
    }
}
