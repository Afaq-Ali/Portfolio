import React from 'react';

class Projects extends React.Component {
    render() {
        return(
            <>
            <div className="section" id="projects">
                <center>
                    <h1>
                        <i className="bx bx-code-block"></i>
                        &nbsp;Projects
                        <hr/>
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <h3>React Daily Diary</h3>
                            <hr/>
                            <p>It is simple diary where user can create account, and can write your daily activities.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, React JS, Node Js, and Firebase</p>
                            <a href="">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>CRUD App</h3>
                            <hr/>
                            <p>It is simple create, read, update, delete application where user can enter movies review, update them, delete them, etc.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, React Js, Node Js and MySql</p>
                            <a href="">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Secure Login System</h3>
                            <hr/>
                            <p>It's a simple Login system created with React Js, Node/ Express Js, MySql, Bcrypt, and AWS authentication.</p>
                            <p><h><b>Technologies : </b></h>React Js, Node JS, Express Js, Bcrypt, AWS authentication, MySql</p>
                            <a href="">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Full front end Website using css animations and more!</h3>
                            <hr/>
                            <p>Created full front end website from scratch, fully mobile responsive, and using cool css animations.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, animations, JAVASCRIPT, JQUERY</p>
                            <a href="">Source Code</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Robofriends App</h3>
                            <hr/>
                            <p>Robofriends app is webapp created with React Js, using API, to import robots images. It's a responsive webapp in which you can search through defferent robots.</p>
                            <p><h><b>Technologies : </b></h>React JS, Node/ Express JS</p>
                            <a href="">Visit Site</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Portfolio Website</h3>
                            <hr/>
                            <p>Portfolio Website using HTML, CSS, JAVASCRIPT, Bootstrap with cool CSS/ JQUERY animations.</p>
                            <p><h><b>Technologies : </b></h>HTML, CSS, Bootstrap, JS, JQUERY</p>
                            <a href="" >Visit Site</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Blog Website</h3>
                            <hr/>
                            <p>Blog website for latest trends and Technologies news.</p>
                            <p><h><b>Technologies : </b></h>WORDPRESS, BLOGGER</p>
                            <a href="">Source Code</a>
                        </div>
                    </div>
                </center>
            </div>
            </>
        )
    }
}

export default Projects;