import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  TabContent,
  TabPane,
  Container,
  Row,
  Col, CardHeader,NavItem,
  NavLink,
  Nav

} from "reactstrap";

// core components

function PaginationSection3({  titre,image,contenu }) {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
           
            <Col className="ml-auto mr-auto" md="10" xl="5">
              <Card>
                <CardHeader>
                <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                      >
                        Le Titre: {titre}
                      </NavLink>
                    </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>{image}</p>
                      <p>{contenu}</p>
                      

                    </TabPane> </TabContent>
                </CardBody>
              </Card>
            </Col>            


    </>
  );
}

export default PaginationSection3;
