import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { FaInstagram, FaTwitch, FaDiscord, FaYoutube } from "react-icons/fa"
import '../css/App.css';
import '../css/footer.css';
import { Component } from "react";


class Footer extends Component {
//                  UwU
    render() {
        return (
            <>
                <footer>
                    <Container>
                        <Row className="margin-top">
                            <Col lg={3} md={3} xs={3}>
                                <a className="redirect" target="_blank" href="https://instagram.com/katochi_tv/"  rel="noreferrer"><span className="links"><FaInstagram className='logo' />Katochi_tv</span></a>
                            </Col>
                            <Col lg={3} md={3} xs={3}>
                                <a className="redirect"  target="_blank" href="https://www.twitch.tv/katochi_tv" rel="noreferrer"><span className="links"><FaTwitch className='logo' />Katochi_tv</span></a>
                            </Col>
                            <Col lg={3} md={3} xs={3}>
                                <a className="redirect" target="_blank" href="https://discord.gg/gSugRjcTeJ" rel="noreferrer"><span className="links"><FaDiscord className='logo' />KATOCHI</span></a>
                            </Col>
                            <Col lg={3} md={3} xs={3}>
                                <a className="redirect" target="_blank" href="/" rel="noreferrer"><span className="links"><FaYoutube className='logo' />KATOCHI</span></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="contact ">
                                <span className="">Contact: katochicorp@gmail.com</span>
                            </Col>
                        </Row>
                    </Container>
                </footer>

            </>
        );
    }
} export default Footer