import React, { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Paginacao from "../../../components/Paginacao";
import Sticker from "../../../components/Sticker";
import MiniSticker from "../../../components/MiniSticker";
import { TimelineCard } from "../../../components/TimelineCard";
import imagemArvores from "../../../assets/SítioVerde_1.jpg"
import imagemPlacasSolares from "../../../assets/SítioVerde_2.jpg"
import imagemBazar from "../../../assets/bazar.jpg"
import imagemHorta from "../../../assets/horta.jpg"
import imagemGrafico from "../../../assets/grafico.png"
import imagemCampo from "../../../assets/SítioVerde_6.jpg"
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";

import {
    Text,
    Title,
    Space,
    ImageWrapper,
    DivStyled,
    DivStyled2,
    DivImagem,
    DivTexto,
    DivOverlay,
    ImgStyled,
    SitioSemLixo,
    SitioSemLixoTitle,
    Container,
    MiniSpace,
    IconWrapper,
    SitioVerdeTitle,
    FullWidthContainer,
    Centralização,
    Layout
} from "./styeld"


export default function SocialActionsPage() {

    useEffect(() => {
        // Rola para o topo da página quando o componente é montado
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <FullWidthContainer>

                <Paginacao>
                    <Link className="page" to={ROUTES.MAIN}>Família do Sítio</Link>
                    {" > "}
                    <span>Sítio verde</span>
                </Paginacao>
                <Space />
                <Centralização>
                    <Layout>    
                        <Title>Sítio Verde</Title>
                        <Text>
                            É uma iniciativa voltada para projetos sociais e sustentáveis. A Família do Sítio busca impactar
                            positivamente o meio ambiente e a comunidade ao adotar práticas como uso de <strong>placas fotovoltaicas </strong>
                            para gerar energia limpa, <strong>reutilização de paletes e lonas em projetos sociais</strong>,
                            transformação de restos de alimentos e cinzas dos torradores em adubo, cultivo de horta para
                            distribuição de alimentos frescos e saudáveis aos funcionários. Cada ação do Sítio Verde
                            reflete nosso compromisso com um futuro mais sustentável e inclusivo. 
                        </Text>
                    </Layout>
                </Centralização>
                <Space />

                <DivImagem>
                    <img src={imagemArvores} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />

                    <DivTexto>
                        <div style={{ marginLeft: "30vw" }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat.
                        </div>
                    </DivTexto>
                </DivImagem>
                <DivStyled>
                    <Sticker title={"PLACAS FOTOVOLTAICAS"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."} />
                    <img src={imagemPlacasSolares} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                </DivStyled>
                <DivStyled2>
                    <img src={imagemGrafico} alt="grafico" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    <Sticker title={"PROGRAMA 5S"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."} />
                </DivStyled2>
                <DivStyled>
                    <Sticker title={"A GRANDE FAMÍLIA DO SÍTIO: BAZAR"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."} />
                    <img src={imagemBazar} alt="bazar da grande familia" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                </DivStyled>
                <DivStyled2>
                    <img src={imagemHorta} alt="grafico" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    <Sticker title={"HORTA COMUNITÁRIA"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."} />
                </DivStyled2>

                <Container>
                    <MiniSpace />
                    <SitioSemLixoTitle>SÍTIO SEM LIXO</SitioSemLixoTitle>


                    <SitioSemLixo>
                        <MiniSticker title={"Xepa do Sítio"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={0} />
                        <MiniSticker title={"Coleta Seletiva"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={3} />
                        <MiniSticker title={"Maõs que Criam"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={1} />
                        <MiniSticker title={"Reutilização de Paletes"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={4} />
                        <MiniSticker title={"Logística Reversa Eletrônicos"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={2} />
                        <MiniSticker title={"Projeto Compostar"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={5} />
                    </SitioSemLixo>
                    <MiniSpace />
                </Container>



                <DivImagem style={{ marginBottom: "-50px" }}>
                    <img src={imagemCampo} alt="Campo verde" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                </DivImagem>
            </FullWidthContainer>
        </>
    );

}