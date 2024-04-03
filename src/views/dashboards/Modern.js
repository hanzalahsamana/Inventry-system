import {
  Row,
  Col,
  InputGroup,
  InputGroupText,
  Input,
  FormGroup,
  FormText,
  Form,
} from "reactstrap";
import ComponentCard from "../../components/ComponentCard";
// import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ProgressCards from "../../components/dashboard/modernDashboard/ProgressCards";
import RevenueStatistics from "../../components/dashboard/modernDashboard/RevenueStatistics";

const Classic = () => {
  return (
    <>
      {/* <BreadCrumbs /> */}
      <Row>
        <Col sm="12" md="6" lg="4">
          <ComponentCard
            title="Filters:"
            subtitle={
              <p>
                Date Range
              </p>
            }
          >
            <Form>
              <FormGroup>
                <Input type="date" />
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
        <Col sm="12" md="6" lg="4">
          <ComponentCard
            title="Filters:"
            subtitle={
              <p>
                Products
              </p>
            }
          >
            <Form>
              <FormGroup className="mb-0">
                <Input type="text" placeholder="Products" />
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
        <Col sm="12" md="6" lg="4">
          <ComponentCard
            title="Filters:"
            subtitle={
              <p>
                Fullfilled By
              </p>
            }
          >
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Fullfilled By" />
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
      </Row>
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
