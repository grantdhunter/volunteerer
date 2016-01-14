import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';

import Slider from 'react-slick';

const appBar = <AppBar title="Drivewzye Volunteerer" showMenuIconButton={false}/>

const motto = (<Card>
                    <CardHeader
                        title="Team Motto"/>
                    <CardText>
                        <ul>
                            <li>KISS</li>
                            <li>TTTTDTR</li>
                            <li>Don't break things</li>
                            <li>Don't panic</li>
                        </ul>
                    </CardText>
               </Card>);

const thatOtherThing = (<Card>
                            <CardHeader
                                title="That Other thing"/>
                            <CardText>
                                <ul>
                                    <li>KISS</li>
                                    <li>TTTTDTR</li>
                                    <li>Don't break things</li>
                                    <li>Don't panic</li>
                                </ul>
                            </CardText>
                       </Card>);

const candidates = [
        {
            name: "One",
            picture: "1.png"
        },
        {
            name: "Two",
            picture: "2.png"
        },
        {
            name: "Three",
            picture: "3.png"
        }
    ];
               
function pickVolunteer(event) {
    var numCandidates = candidates.length;
    
    var luckycandidateIndex = Math.floor(Math.random() * numCandidates);
}
               
const pickPersonButton = (<FloatingActionButton onTouchTap={pickVolunteer}>
                            <FontIcon className="material-icons">shuffle</FontIcon>
                         </FloatingActionButton>);
               

                          
var Carousel = React.createClass({
                          render: function (){
                                    var settings = {
                                        infinite: true,
                                        centerMode: true,
                                        slidesToShow: 3,
                                        className:'carimg',
                                        centerPadding: '60px',
                                        autoplay: true,
                                        autoplaySpeed: 800
                                    };
                                    return (
                                        <Slider {...settings}>
                                            <div><img src="http://lorempixel.com/image_output/people-q-c-640-480-9.jpg" style={{maxWidth:512}} /></div>
                                            <div><img src="http://lorempixel.com/image_output/people-q-c-640-480-9.jpg" style={{maxWidth:512}} /></div>
                                            <div><img src="http://lorempixel.com/image_output/people-q-c-640-480-3.jpg" style={{maxWidth:512}} /></div>
                                            <div><img src="http://lorempixel.com/image_output/people-q-c-640-480-3.jpg" style={{maxWidth:512}} /></div>
                                            <div><img src="http://lorempixel.com/image_output/people-q-c-640-480-7.jpg" style={{maxWidth:512}} /></div>
                                            <div><img src="http://lorempixel.com/image_output/people-q-c-640-480-7.jpg" style={{maxWidth:512}} /></div>
                                        </Slider>
                                    )
                                }
                          });  

var carouselCard = (<Card>
                            <CardText>
                                <Carousel></Carousel>
                            </CardText>
                       </Card>);
                          
ReactDOM.render(<div>
                    {appBar}
                    {motto}
                    {thatOtherThing}
                    {carouselCard}
                    {pickPersonButton}
                </div>,
    document.getElementById('container')
);
