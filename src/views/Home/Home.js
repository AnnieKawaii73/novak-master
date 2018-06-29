import React from "react";
import { Header, Container } from "semantic-ui-react";

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
          <Header>Welcome to Novak</Header>
          <Container>
            <p>
              Novak Technologies is a world class company dedicated to the
              design and manufacture of electronic products involving power
              conversion and microprocessor based technologies. We have a
              successful history of consistently supplying innovative and cost
              effective solutions through our design, manufacturing and customer
              support.
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
