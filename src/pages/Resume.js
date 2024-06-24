import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Resu.css';

const Resume = () => {
  return (
    <Container className="resume-container">
      <div className="resume-content">
        <Row>
          <Col md={6}>
            <section className="section">
              <h2 className="section-title">개인 정보</h2>
              <hr className="divider" />
              <Row className="info-row">
                <Col xs={5} className="info-label">이름:</Col>
                <Col xs={7} className="info-text">이인규</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">이메일:</Col>
                <Col xs={7} className="info-text">dinodove@icloud.com</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">전화번호:</Col>
                <Col xs={7} className="info-text">010-9795-3662</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">주소:</Col>
                <Col xs={7} className="info-text">서울특별시 은평구 갈현로</Col>
              </Row>
            </section>

            <section className="section">
              <h2 className="section-title">최종 학력</h2>
              <hr className="divider" />
              <Row className="info-row">
                <Col xs={5} className="info-label">학위:</Col>
                <Col xs={7} className="info-text">4년제 대학 재학</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">재학 학교:</Col>
                <Col xs={7} className="info-text">국립한밭대학교</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">학과:</Col>
                <Col xs={7} className="info-text">응용소프트웨어학과</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">기간:</Col>
                <Col xs={7} className="info-text">2024년 - 재학중</Col>
              </Row>
            </section>

            
          </Col>

          <Col md={6}>
            <section className="section">
              <h2 className="section-title">경력 사항</h2>
              <hr className="divider" />
              <Row className="info-row">
                <Col xs={5} className="info-label">회사:</Col>
                <Col xs={7} className="info-text">(주)*****</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">직위:</Col>
                <Col xs={7} className="info-text">사원</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">기간:</Col>
                <Col xs={7} className="info-text">2021년 5월 - 2024년 6월</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">업무 내용:</Col>
                <Col xs={7} className="info-text">Apple사 제품 유통 및 영업</Col>
              </Row>
            </section>

            <section className="section">
              <h2 className="section-title">자격 사항</h2>
              <hr className="divider" />
              <Row className="info-row">
                <Col xs={5} className="info-label">민간 자격증</Col>
                <Col xs={7} className="info-text">SQLD(SQL개발자)</Col>
              </Row>
              <Row className="info-row">
                <Col xs={5} className="info-label">국가 자격증</Col>
                <Col xs={7} className="info-text">ADsP(데이터분석 준전문가)</Col>
              </Row>
            </section>
          </Col>
          

          <Col md={14}>
            <section className="section">
              <h2 className="section-title">기술 스택</h2>
              <hr className="divider" />
              <Row className="tech-stack">
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack1.png`} alt="HTML" className="img-fluid" /></Col>
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack2.png`} alt="Java" className="img-fluid" /></Col>
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack3.png`} alt="JS" className="img-fluid" /></Col>
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack4.png`} alt="React.js" className="img-fluid" /></Col>
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack5.png`} alt="Java Spring" className="img-fluid" /></Col>
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack6.png`} alt="Python" className="img-fluid" /></Col>
                <Col xs={4} sm={2}><img src={`${process.env.PUBLIC_URL}/images/lan-stack7.png`} alt="Cplusplus" className="img-fluid" /></Col>
              </Row>
            </section>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Resume;
