import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./assets/Style.css"
import "./assets/Style.responsive.css"
import profile from "./assets/images/profile.jpg"
import { FaCode, FaFacebookF, FaGithub, FaLinkedinIn, FaStackOverflow, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGraduationCap, FaRegStar, FaRegStarHalf, FaTelegramPlane } from "react-icons/fa";
import { IoCloudDownloadOutline, IoLocationOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LatestProjectCard from "./Components/LatestProjectCard.jsx"
import OtherProjectCard from "./Components/OtherProjectCard.jsx"
import WorkExperienceCard from "./Components/WorkExperienceCard.jsx"
import { MdOutlineArrowOutward } from "react-icons/md"
import SkillsCard from "./Components/SkillsCard.jsx"
import TestimonialsCard from "./Components/TestimonialsCard.jsx"


const App = () => {
  return (
    <>
      {/* Header Section Start */}
      <header className="hearder_secton">
        <div className="container">
          <div className="row align-items-center justify-content-between py-4">
            <div className="col-sm-8">
              <div className="d-sm-flex align-items-center text-center text-sm-start">
                <div className="profile_img_box mx-auto mx-sm-0">
                  <img src={profile} alt="profile image" className="profile_img" />
                </div>
                <div className="ms-3">
                  <h1 className="profile_name">Sabbir Hosain</h1>
                  <p className="profile_qualification">Front-end Web Developer</p>
                  <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-2">
                    <a href="" target="_blank" className="socail_icon_box">
                      <FaFacebookF className="socail_icon" />
                    </a>
                    <a href="" target="_blank" className="socail_icon_box">
                      <FaLinkedinIn className="socail_icon" />
                    </a>
                    <a href="" target="_blank" className="socail_icon_box">
                      <FaGithub className="socail_icon" />
                    </a>
                    <a href="" target="_blank" className="socail_icon_box">
                      <FaTelegramPlane className="socail_icon" />
                    </a>
                    <a href="" target="_blank" className="socail_icon_box">
                      <FaCode className="socail_icon" />
                    </a>
                    <a href="" target="_blank" className="socail_icon_box">
                      <FaStackOverflow className="socail_icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="d-flex align-items-center gap-2 justify-content-center justify-content-sm-start mt-4 mt-sm-0">
                <a href="" className="direct_massage_email">
                  <HiOutlineMailOpen className="direct_massage_icon" /> Email</a>
                <a href="" className="direct_massage_whatasapp">
                  <FaWhatsapp className="direct_massage_icon" />Chat</a>
              </div>
            </div>
          </div>
        </div>
      </header >

      <main className="main_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">

              {/* about me */}
              <div className="about_me">
                <h3 className="section_heading">About Me</h3>
                <p className="about_skills"><strong>Languages :</strong> HTML, CSS, SASS, JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS.</p>
                <p className="about_skills"><strong>Frameworks :</strong> Bootstrap, TailwindCss, MaterialUI,</p>
                <p className="about_skills"><strong>Chatbots :</strong></p>
                <p className="about_skills"><strong>Tools :</strong></p>
                <p className="about_skills"><strong>Editor Journey :</strong></p>
                <p className="about_skills"><strong>Operating System :</strong></p>
                <p className="about_skills"><strong>Experience :</strong> 4+ Month</p>
                <p className="about_skills"><strong>Current Employer - </strong><a href="">Senior Web Developer, XEMIRON, Bangladesh, Rajshahi</a></p>
              </div>
              {/* project */}

              <div className="latest_project">
                <h3 className="section_heading">Latest Project</h3>
                <LatestProjectCard />
                <LatestProjectCard />
                <div className="d-flex align-items-center gap-2">
                  <button className="pagination_btn"><IoIosArrowBack /></button>
                  <button className="pagination_btn"><IoIosArrowForward /></button>
                </div>
              </div>

              {/* other project */}
              <div className="other_project">
                <h3 className="section_heading">Other Project</h3>
                <OtherProjectCard />
                <OtherProjectCard />
                <OtherProjectCard />
                <OtherProjectCard />
                <a href="" className="more_on_btn">More on Linkedin<MdOutlineArrowOutward /></a>
              </div>

              {/* work experience */}
              <div className="work_experience">
                <h3 className="section_heading">Work Experience</h3>
                <WorkExperienceCard />
                <WorkExperienceCard />
                <WorkExperienceCard />
                <WorkExperienceCard />
              </div>

            </div>
            <div className="col-sm-4">
              {/* my info */}
              <div className="my_info">
                <p className="my_info_details"><IoLocationOutline />Rajshahi Bangladesh</p>
                <p className="my_info_details"><HiOutlineMailOpen /><a href="">Youremail@gmail.com</a></p>
                <p className="my_info_details"><IoCloudDownloadOutline /><a href="">Download CV</a></p>
                <p className="my_info_details"><RiContactsBook3Line /><a href="">Contact Us</a></p>
              </div>

              {/* skills */}
              <div className="skills">
                <h3 className="section_heading">Skills</h3>
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
              </div>

              {/* Testimonials */}
              <div className="testimonials">
                <h3 className="section_heading">Testimonials</h3>
                <TestimonialsCard />
                <TestimonialsCard />
                <TestimonialsCard />
                <a href="">Find out more <MdOutlineArrowOutward /></a>
              </div>

              {/* Education */}
              <div className="education">
                <h3 className="section_heading">Education</h3>
                <div className="mb-4">
                  <h6 className="education_title"><FaGraduationCap />BTech Computer Science</h6>
                  <p className="education_text"><a href="" className="education_text">Vellore Institute of Technology, Vellore</a>(2014-2016)</p>
                </div>
                <div className="mb-4">
                  <h6 className="education_title"><FaGraduationCap />BTech Computer Science</h6>
                  <p className="education_text"><a href="" className="education_text">Vellore Institute of Technology, Vellore</a>(2014-2016)</p>
                </div>
              </div>

              {/* Languages */}
              <div className="languages">
                <h3 className="section_heading">Languages</h3>
                <p className="language_text"><strong>English : </strong>Professional <span className="language_star"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></span></p>
                <p className="language_text"><strong>Hindi : </strong>Professional <span className="language_star"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStarHalf /></span></p>
                <p className="language_text"><strong>Bangla : </strong>Native Speaker <span className="language_star"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></span></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer_section">
        <p className="footer_text">Created By Sabbir Hosain &copy; 2024. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App