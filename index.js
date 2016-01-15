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
import injectTapEventPlugin from 'react-tap-event-plugin';

import Slider from 'react-slick';

injectTapEventPlugin();

const appBar = <AppBar title="Drivewzye Volunteerer" showMenuIconButton={false}/>

const motto = (<Card>
                    <CardHeader
                        title="Team Motto"/>
                    <CardText>
                        <ul>
                            <li>System Robustness</li>
                            <li>Better Processes</li>
                            <li>Knowledge Sharing</li>
                        </ul>
                    </CardText>
               </Card>);

const thatOtherThing = (<Card>
                            <CardHeader
                                title="Guiding Principles"/>
                            <CardText>
                                <ul>
                                    <li>Share, Collaborate</li>
                                    <li>Personal and Professional Growth</li>
                                    <li>Support each other</li>
                                    <li>Everything is up for discussion; Everything can be changed</li>
                                    <li>Play</li>
                                </ul>
                            </CardText>
                       </Card>);

const candidates = [
        {
            name: "One",
            picture: "http://lorempixel.com/image_output/people-q-c-640-480-9.jpg"
        },
        {
            name: "Two",
            picture: "http://lorempixel.com/image_output/people-q-c-640-480-3.jpg"
        },
        {
            name: "Three",
            picture: "http://lorempixel.com/image_output/people-q-c-640-480-7.jpg"
        },
        {
            name: "Four",
            picture: "http://lorempixel.com/image_output/people-q-c-640-480-9.jpg"
        },
        {
            name: "Five",
            picture: "http://lorempixel.com/image_output/people-q-c-640-480-3.jpg"
        },
        {
            name: "Six",
            picture: "http://lorempixel.com/image_output/people-q-c-640-480-7.jpg"
        }
    ];
               

               
               

var list = candidates.map(function(candidate, i){
                            return (<div key={i}>
                                        <img src={candidate.picture} style={{maxWidth:512}} />
                                        <h2>{candidate.name}</h2>
                                    </div>)
                        })
                          
                          
var Carousel = React.createClass({
                        getInitialState: function() {
                            var rand = Math.round(Math.random() * candidates.length);
                            console.log(rand)
                        return {
                            luckyCandidateIndex: rand,
                            move: true
                        }
                      },
                        pickVolunteer: function (event) {
                                var that = this;
                                var luckyCandidateIndex = Math.round(Math.random() * candidates.length);
                                console.log(luckyCandidateIndex)
                                this.setState({
                                        move: false        
                                });
                                setTimeout(function(){
                                    that.setState({
                                        luckyCandidateIndex:luckyCandidateIndex
                                    })
                                }, 810) 
                        },
                        render: function (){
                                    var settings = {
                                        infinite: true,
                                        centerMode: true,
                                        slidesToShow: 3,
                                        className:'carimg',
                                        centerPadding: '60px',
                                        initialSlide: this.state.luckyCandidateIndex,
                                        slickGoTo: this.state.luckyCandidateIndex,
                                        autoplay: this.state.move,
                                        autoplaySpeed: 800
                                    };
                                    return (<div>
                                            <Slider {...settings}>
                                                {list}
                                            </Slider>
                                            <FloatingActionButton onTouchTap={this.pickVolunteer}>
                                                <FontIcon className="material-icons">shuffle</FontIcon>
                                            </FloatingActionButton>
                                        </div>)
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
                </div>,
    document.getElementById('container')
);
