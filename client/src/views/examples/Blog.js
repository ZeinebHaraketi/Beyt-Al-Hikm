import React from "react";
import { useEffect, useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Container,
  Col, Row
} from "reactstrap";
import InputGroup from "components/pages/InputGroup";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";
import axios from "axios";
import PaginationSection2 from "views/index-sections/PaginUser";
import PaginationSection3 from "views/index-sections/PaginBlog";


import Notifications from "views/index-sections/Notifications";

function LoginPage3() {
  const [postData, setPostData] = useState({
    titre: '',image: '',contenu: ''
});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [data, setBlogs] = useState([])
  const [setFirstFocus] = React.useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
 
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.titre]: e.target.value,
    });
    
  };

  const clear = ()=> {
    setPostData({    titre: '',image: '',contenu: ''

});
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3700/api_blog/blogs', form)
    .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
      clear();
    }).catch(err=>setErrors(err.response.data))   
  }

  useEffect(() => {
    axios.get('http://localhost:3700/api_blog/blogs').then((res) => {
      setBlogs(res.data);
      console.log(201);
    }).catch(err => { console.log(err) });
  }
  );
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/house.jpg") + ")"
            }}
          ></div>

          <div className="content">

            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form onSubmit={onSubmitHandler} className="form" >
                    <CardHeader className="text-center">
                      <h2>Rejoignez Nous !</h2>
                    </CardHeader>
                    <CardBody>
                          <InputGroup
                  type="text"
                  name="titre"
                  onChange={(e) => setPostData({ ...postData, titre: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Titre ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p>{errors.titre}</p>
                <InputGroup
                  type="text"
                  name="image"
                  onChange={(e) => setPostData({ ...postData, image: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Image ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p>{errors.image}</p>
                <InputGroup
                  type="text"
                  name="contenu"
                  onChange={(e) => setPostData({ ...postData, contenu: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Contenu ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p >{errors.contenu}</p>
                 

               
              
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        type="submit"
                        size="lg"
                      >
                        Join us
                      </Button>
                     
                      <Notifications message={message} show={show}/>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container></div> </div>    <div></div>
        <div className="main">
        <div className="section section-tabs">
        <Container>
          <Row> 
          {data.map(({ titre,image,contenu }) => (
            <PaginationSection3 titre={titre}
              image={image}
              contenu={contenu} 
              
              />
          ))}
          <br></br>
          <br></br>
        </Row></Container></div></div>
        <DarkFooter></DarkFooter>

      </div>

    </>
  );
}

export default LoginPage3;
