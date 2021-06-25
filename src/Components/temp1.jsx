import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Temp1 = () => {
    return (
        <div style={{backgroundColor:"green", width:"400px", height:"400px"}}>
            Hello yash!
            <Container>
                <Row>
                    <Col md={{size:6, offset:2}}>
                        HII
                    </Col>
                    <Col>
                        , How are You?
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    );
}

export default Temp1;
