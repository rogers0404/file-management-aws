import React from "react";
import image1 from "../../assets/Why-Cloud-Computing-is-Booming-in-the-Market.png"
import image2 from "../../assets/cloud_database_shutterstock_Istel.jpg"
import image3 from "../../assets/RWM-Social-CloudHosting-191211.jpg"

const Home = () => {

return (

<div class="d-flex justify-content-center">
    <div className="w-75">
        <div className-="w-100 d-flex justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image1} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Get in touch</h5>
                            <p>With iMeet you can connect with your friends</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Enjoy</h5>
                            <p>With iMeet you can connect with your friends</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image3} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Share</h5>
                            <p>With iMeet you can connect with your friends</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev justify-content-center" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>

        </div>
    </div>
</div>
);
};


export default Home;
