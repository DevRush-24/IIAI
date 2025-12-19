import React from 'react'
import '../style.css'

export default function Header() {
  return (
    
        <div className="container-fluid bg-breadcrumb">
            <div className="bg-breadcrumb-single"></div>
            <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 className="text-white fw-bold display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">News & Updates</h4>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    
                    <li className="breadcrumb-item active text-primary">Activities</li>
                </ol>    
            </div>
        </div>
    
  )
}
