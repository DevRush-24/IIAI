import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        // <!-- Footer -->



        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">


                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">About Us</h4>
                                    <p className="mb-3">The association provides a common platform and support to the irradiation industry with the objective of advancing the safe and beneficial use of Irradiation technology</p>
                                    <div className="position-relative mx-auto rounded-pill">
                                        <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                        <a href="contact.html"><button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Contact</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Explore</h4>
                                <a href="index.html"><i className="fas fa-angle-right me-2"></i> Home</a>
                                <a href="about.html"><i className="fas fa-angle-right me-2"></i> Objectives</a>
                                <a href="Executive_Committee.html"><i className="fas fa-angle-right me-2"></i> Executive Committee</a>
                                <a href="Our_Members.html"><i className="fas fa-angle-right me-2"></i> IIAI Members</a>
                                <a href="Announcement.html"><i className="fas fa-angle-right me-2"></i> Announcement</a>
                                <a href="Courses.html"><i className="fas fa-angle-right me-2"></i> Courses</a>
                                <a href="contact.html"><i className="fas fa-angle-right me-2"></i> Contact</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <a href="" ><i className="fa fa-map-marker-alt me-2"></i> IRRADIATION INDUSTRIES ASSOCIATION OF INDIA (IIAI)<br />
                                    310, ATL Corporate Park <br /> Saki Vihar Road<br /> Mumbai Pincode - 400072

                                </a>
                                <a href=""><i className="fas fa-envelope me-2"></i> info@iiai-india.com</a>
                                <a href=""><i className="fas fa-phone me-2"></i> +91 91675 52177</a>

                                <div className="d-flex align-items-center my-3">
                                    <a className="btn btn-light btn-md-square me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-light btn-md-square me-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-light btn-md-square me-2" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-light btn-md-square me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>





                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item-post d-flex flex-column">
                                <h4 className="text-white mb-4">Locate Us</h4>


                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.314663793022!2d72.891617!3d19.122683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80dd905b14f%3A0x7116c4536fa29888!2sATL%20CORPORATE%20PARK!5e0!3m2!1sen!2sin!4v1743605378551!5m2!1sen!2sin"
                                    width="300"
                                    height="250"
                                    style={{ border: 0, borderRadius: "30px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />





                                {/* <!-- <div className="d-flex flex-column mb-3">
                            <p className="text-uppercase text-primary mb-2">Investment</p>
                            <a href="#" className="text-body">Revisiting Your Investment & Distribution Goals</a>
                        </div>
                        <div className="d-flex flex-column mb-3">
                            <p className="text-uppercase text-primary mb-2">Business</p>
                            <a href="#" className="text-body">Dimensional Fund Advisors Interview with Director</a>
                        </div>
                        <div className="footer-btn text-start">
                            <a href="#" className="btn btn-light rounded-pill px-4">View All Post <i className="fa fa-arrow-right ms-1"></i></a>
                        </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* <!-- Footer --> */}

            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-12 text-center text-md-start mb-md-0">
                            <span className="text-body"><a href="wextarinteractive.in" className="border-bottom text-primary"><i
                                className="fas fa-copyright text-light me-2"></i>Wextar Interactive</a>, All right
                                reserved.</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}
        </>
    )
}
