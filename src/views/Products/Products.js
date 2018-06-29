import React from "react";
import { Header, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class extends React.Component {
  render() {
    const page =
      this.props.language === "spanish" ? (
        <div>
          <Header>Bienvenido a Novak</Header>
          <Container>
            <p>
              Novak Technologies es una compañía de clase mundial dedicada al
              diseño y manufactura de productos electrónicos incluyendo
              tecnologías de conversión de poder basadas en microprocesador. Con
              una exitosa y consistente carrera como proveedor de soluciones
              innovadoras y de bajo costo, Novak se ha distinguido por su
              profesionalismo en sus diseños, manufactura y soporte al cliente.
            </p>
            <p>
              Novak sostiene su compromiso de mejora contínua de todos sus
              productos y servicio a sus clientes.
            </p>
          </Container>
        </div>
      ) : (
        <div>
          <Header>Products</Header>
          <Container>
            <p>
              These Power supplies are among the most advanced in the industry
              and were specially designed for electrochemical processes. Some
              areas where they are used: Surface finishing, Printed Circuit
              Boards, Electronic packaging, semiconductor, electroforming,
              electromachining, MEMS (nanotechnology) and Research). Novak is
              willing to work together with customers on{" "}
              <Link to="/services">custom designs</Link>.
            </p>
            <p>
              Novak remain committed to continual improvement, product
              development and service to its customers.
            </p>
          </Container>
        </div>
      );
    return { page };
  }
}
