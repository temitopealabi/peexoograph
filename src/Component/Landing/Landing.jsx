import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import { AccountConsumer } from "../../AccountContext/AccountProvider";
import Header from '../Header/Header';

// import 'react-infinite-calendar/styles.css'; 
import './landing.css';



// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '', tabActive: 'availability', date: new Date(),
        };
    }

    onChangeDate = date => this.setState({ date })

    // apply a dark color to the navbar background when its being scroll to the height of 400
    listenScrollEvent = e => {
        if (window.scrollY > 400) { this.setState({ bgColor: '#211E1E' }); }
        else { this.setState({ bgColor: '' }); }
    }

    handleClickTab = (data) => {
        console.log("i was clicked");
        this.setState({ tabActive: data });
    }

    // tileDisabled = (
    //     dataNotYetFetched
    //       ? () => false // Or true, if you want to prevent user from selecting anything until the data is fetched
    //       : ({date, view }) => { /* your magic goes here */ } // returns true or false based on fetched data
    //   );

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        const { bgColor, tabActive } = this.state;
        return (
            <React.Fragment>
                <Header checkTab={true} bgColor={bgColor} />
                <AccountConsumer>
                    {({ updateOne, addClass }) => { addClass = "fixed-top px-4"; updateOne(addClass); }}
                </AccountConsumer>
                <div className="">
                    <img className="sizeResize" src="/images/sudaf.jpg"

                        width="100%" alt="background peexoo" />
                </div>

                {/* tabs about reviews */}
                <div className="peexooTab" style={{ position: 'relative' }}>
                    <div className="container-fluid">
                        <div className="row ml-auto">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div onClick={() => this.handleClickTab('details')}
                                        className={`${tabActive === 'details' ? 'tabActiveBg' : ""} col pointerTab`}>
                                        <div className="my-3 text-center">
                                            <h5 className="text-white">Details</h5>
                                        </div>
                                    </div>
                                    <div onClick={() => this.handleClickTab('portfolio')}
                                        className={`${tabActive === 'portfolio' ? 'tabActiveBg' : ""} col pointerTab`}>
                                        <div className="my-3 text-center">
                                            <h5 className="text-white">Portfolio</h5>
                                        </div>
                                    </div>

                                    <div onClick={() => this.handleClickTab('availability')}
                                        className={`${tabActive === 'availability' ? 'tabActiveBg' : ""} col pointerTab`}>
                                        <div className="my-3 text-center">
                                            <h5 className="text-white">Availability</h5>
                                        </div>
                                    </div>
                                    <div onClick={() => this.handleClickTab('pricing')}
                                        className={`${tabActive === 'pricing' ? 'tabActiveBg' : ""} col pointerTab`}>
                                        <div className="my-3 text-center">
                                            <h5 className="text-white">Pricing Packages</h5>
                                        </div>
                                    </div>
                                    <div onClick={() => this.handleClickTab('reviews')}
                                        className={` ${tabActive === 'reviews' ? 'tabActiveBg' : ""} col pointerTab clearPadLR`}>
                                        <div className="my-3 text-center">
                                            <h5 className="text-white">Reviews</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* div for image */}
                    <div id="positionInnerImage">
                        <img className="" src="/images/photo_insert.png" style={{ borderRadius: '10px' }} width='200' alt="photo_insert" />
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <ul className="col-md-4"><h1 id="afro">AfroShots<span><img src="/images/passmark_peexoo.png" width="25" alt="passmark_peexoo" /></span></h1></ul>
                        <ul className="col-md-2"></ul>
                        <ul class="col-md-6">

                            <div className="row ml-auto">
                                <div className="col"><button className="btn buttonText  roundButton btn-block btn-outline-warning">Message Photographer</button></div>
                                <div className="col"><button className="btn buttonText  roundButton btn-block btn-outline-warning">Book Now</button></div>

                            </div>
                        </ul>

                    </div>
                </div>

                <div className="container my-4" style={{ position: 'relative' }}>
                    <Calendar
                        onChange={this.onChange}
                        value={['2019-06-01', '2019-08-01']}
                        showDoubleView={true}
                        showFixedNumberOfWeeks={true}
                    />
                    <span className="centerCircle"><img src="/images/round_icon.png" width="30" alt="round_icon" /></span>
                </div>
                <div className="clearfix"></div>
                <div className="pt-5"><Footer /></div>
            </React.Fragment>
        );
    }
}

export default Landing;