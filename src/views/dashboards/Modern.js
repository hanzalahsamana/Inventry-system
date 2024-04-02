import {
  Row,
  Col,
  InputGroup,
  InputGroupText,
  Input,
  FormGroup,
  FormText,
} from "reactstrap";
import ComponentCard from "../../components/ComponentCard";
// import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import ProgressCards from "../../components/dashboard/modernDashboard/ProgressCards";
import RevenueStatistics from "../../components/dashboard/modernDashboard/RevenueStatistics";
import SalesMonth from "../../components/dashboard/modernDashboard/SalesMonth";
import SalesPrediction from "../../components/dashboard/modernDashboard/SalesPrediction";
import SalesDifference from "../../components/dashboard/modernDashboard/SalesDifference";
import ProfileCard from "../../components/dashboard/modernDashboard/ProfileCard";
import ProjectTable from "../../components/dashboard/modernDashboard/ProjectTable";
import RecentMessages from "../../components/dashboard/modernDashboard/RecentMessages";
import Chat from "../../components/dashboard/modernDashboard/Chat";
import WeatherReport from "../../components/dashboard/modernDashboard/WeatherReport";
import Blogs from "../../components/dashboard/modernDashboard/Blogs";
import { Form } from "react-router-dom";

const Classic = () => {
  return (
    <>
      {/* <BreadCrumbs /> */}
      {/* <Row>
        <Col sm="12" md="6" lg="4">
          <ComponentCard
            title="Default Input"
            subtitle={
              <p>
                To use add <code>Input</code> in the form group
              </p>
            }
          >
            <Form>
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
        <Col sm="12" md="6" lg="4">
          <ComponentCard
            title="Input With Helper Text"
            subtitle={
              <p>
                To use add <code>Formtext</code> in the form group
              </p>
            }
          >
            <Form>
              <FormGroup className="mb-0">
                <Input type="text" placeholder="Name" />
                <FormText className="text-muted">Helper Text</FormText>
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
        <Col sm="12" md="6" lg="4">
          <ComponentCard
            title="Password"
            subtitle={
              <p>
                To use add <code>type=&quot;password&quot;</code> in the form
                group
              </p>
            }
          >
            <Form>
              <FormGroup>
                <Input type="password" placeholder="password" />
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
      </Row> */}
      <ProgressCards />
      <RevenueStatistics />
      {/* <Row>
        <Col lg="4">
          <SalesMonth />
        </Col>
        <Col lg="4">
          <SalesPrediction />
          <SalesDifference />
        </Col>
        <Col lg="4">
          <ProfileCard />
        </Col>
      </Row> */}
      {/*********************Chat & comment ************************/}
      {/* <Row>
        <Col lg="6" sm="12">
          <Chat />
        </Col>
        <Col lg="6" sm="12">
          <RecentMessages />
        </Col>
      </Row> */}
      {/*********************Project Table ************************/}
      {/* <Row>
        <Col lg="8">
          <ProjectTable />
        </Col>
        <Col lg="4">
          <WeatherReport />
        </Col>
      </Row> */}
      {/* <Blogs /> */}
    </>
  );
};

export default Classic;
