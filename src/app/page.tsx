import { Carousel, Col, Row } from 'antd'
import Register from '@/components/Register'
import NextTypewriter from '@/components/NextTypewriter'

const contentStyle: React.CSSProperties = {
  height: "320px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "3rem",
  fontWeight: "700",
  borderRadius: "3px",
};

export default function Home() {
  return (
    <>
      <Row gutter={[12,12]}>
        <Col xs={24} sm={24} md={14} lg={16}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>Trasladamos escolares desde casa al colegio</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Podrá ver en tiempo real donde se encuentran</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Tenemos ofertas para alumnos familiares</h3>
            </div>
          </Carousel>
        </Col>
        <Col xs={24} sm={24} md={10} lg={8} className='gx-d-flex gx-justify-content-center gx-align-items-center'>
          <Register/>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={14} lg={16}>

        </Col>
        <Col xs={24} sm={24} md={10} lg={8}>

        </Col>
      </Row>
    </>
  )
}
