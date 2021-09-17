/* eslint-disable */
import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
    <div className="navbar-mainbg cool-font">
      <div className="d-flex flex-row justify-content-center">
        <div className="p-2" onClick={event =>  window.location.href='/'}>
          <NavLink className="navbar-brand navbar-logo no-pad" to="/" exact>
            SPIRE VCV
          </NavLink>
        </div>
      </div>
      <div className="d-flex flex-row-reverse justify-content-center">
        <div className="p-2 no-pad">
          <nav className="navbar navbar-expand-lg no-pad">
            <button 
              className="navbar-toggler"
              onClick={ function(){
                setTimeout(function(){ animation(); });
              }}
              type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars text-white"></i>
            </button>

            <div 
              className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  
                  <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                  </div>
                  
                  
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/" exact>
                    <i 
                    className="fas fa-tachometer-alt">
                    </i>Home
                  </NavLink>
                </li>
              

              
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/recording_setup" exact>
                    <i 
                    className="far fa-address-book">
                    </i>Recording &amp; Processing
                  </NavLink> 
                </li>
              

              
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/data" exact>
                    <i 
                    className="far fa-address-book">
                    </i>Data
                  </NavLink> 
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/people" exact>
                    <i 
                    className="far fa-address-book">
                    </i>People
                  </NavLink> 
                </li>
              
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/publication" exact>
                    <i 
                    className="far fa-address-book">
                    </i>Publication
                  </NavLink> 
                </li>
              
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/download" exact>
                    <i 
                    className="far fa-address-book">
                    </i>Download
                  </NavLink> 
                </li>
                  

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  
  )
}
export default Navbar;