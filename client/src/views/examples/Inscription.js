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
import PaginationSection from "views/index-sections/Pagination";
import PaginationSection2 from "views/index-sections/PaginUser";

import Notifications from "views/index-sections/Notifications";

function LoginPage2() {
  const [postData, setPostData] = useState({
    nom: '',prenom: '',adresse: '',photo: '',role: '',login: '', mdp: ''
});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [data, setUsers] = useState([])
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
      [e.target.nom]: e.target.value,
    });
    
  };

  const clear = ()=> {
    setPostData({nom: '',prenom: '',adresse: '',photo: '',role: '',login: '', mdp: ''
});
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3700/api_user/users', form)
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
    axios.get('http://localhost:3700/api_user/users').then((res) => {
      setUsers(res.data);
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
                  name="nom"
                  onChange={(e) => setPostData({ ...postData, nom: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Nom ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p>{errors.nom}</p>
                <InputGroup
                  type="text"
                  name="prenom"
                  onChange={(e) => setPostData({ ...postData, prenom: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Prenom ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p>{errors.prenom}</p>
                <InputGroup
                  type="text"
                  name="adresse"
                  onChange={(e) => setPostData({ ...postData, adresse: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Adresse ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p >{errors.adresse}</p>
                
                <InputGroup
                  type="textarea"
                  name="photo"
                  onChangeHandler={onChangeHandler}
                  onChange={(e) => setPostData({ ...postData, photo: e.target.value })}
                  placeholder="Photo..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />   
                <p >{errors.photo}</p>  

                 <InputGroup
                  type="textarea"
                  name="role"
                  onChangeHandler={onChangeHandler}
                  onChange={(e) => setPostData({ ...postData, role: e.target.value })}
                  placeholder="Role..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />   
                <p >{errors.role}</p>    

                <InputGroup
                  type="textarea"
                  name="login"
                  onChangeHandler={onChangeHandler}
                  onChange={(e) => setPostData({ ...postData, login: e.target.value })}
                  placeholder="Login..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />   
                <p >{errors.login}</p>   

                <InputGroup
                  type="textarea"
                  name="mdp"
                  onChangeHandler={onChangeHandler}
                  onChange={(e) => setPostData({ ...postData, mdp: e.target.value })}
                  placeholder="Mdp..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />   
                <p >{errors.mdp}</p>   

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
          {data.map(({ nom, prenom,adresse, photo,role, login, mdp }) => (
            <PaginationSection2 nom={nom}
              prenom={prenom}
              adresse={adresse} 
              photo={photo}
              role={role}
              login={login}
              mdp={mdp}
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

export default LoginPage2;
