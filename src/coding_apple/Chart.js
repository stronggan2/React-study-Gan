import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  return (
    <Container>
      <Line type="line" data={data} options={options} />
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;

