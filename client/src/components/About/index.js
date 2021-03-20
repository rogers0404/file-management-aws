import React from 'react';
import photoVision from '../../assets/one-ourvision-1576152691.jpg';
import photoMission from '../../assets/mission.jpg'
function About() {
  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-75 d-flex justify-content-center textFontColor">
                <div className="card-header m-1 font-weight-bold textFontColor">About Us</div>
                <div className="card-body">
                    {/* <img className="card-img-top m-1 imageWidth" src={photo} alt="Rogers"/> */}
                    <div>
                        <p className="card-text m-1 text-justify textFontColor py-2">
                        iT Solutions is a IT Company that helps clients to achieve their business goals through out IT, 
                        bring them reliable solutions that matches with the necessities.
                          </p>
                      </div>
                      <div>
                        <p><br/></p>
                      </div>
                      <div className="d-flex justify-content-lg-start justify-content-md-start d-sm-flex flex-sm-row">
                        <img className="img-fluid w-25 pr-2 rounded-circle" src={photoVision} alt="Vision"/>
                        <p className="card-text m-1 text-justify textFontColor align-self-md-center align-self-lg-center">
                            To be a reliable partner for the implementation of modern IT-solutions in the cloud that help our clients' businesses
                        </p>
                      </div>
                      <div>
                        <p><br/><br/></p>
                      </div>
                      <div className="d-flex justify-content-lg-start justify-content-md-start d-sm-flex flex-sm-row">
                          <img className="img-fluid w-25 pr-2 rounded-circle" src={photoMission} alt="Mission"/>
                          <p className="card-text m-1 text-justify textFontColor align-self-md-center align-self-lg-center">
                            To bring real IT-solutions in the cloud that matches our clients' necessities
                          </p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default About;
