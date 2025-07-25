import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <h1>
      Store
      <Row md={2} sm={1} lg={3} className="g-3">
        {storeItems.map((item) => (
        //   <Col>{JSON.stringify(item)}</Col>
        <Col><StoreItem {...item}/></Col>
        ))}
      </Row>
    </h1>
  );
}
