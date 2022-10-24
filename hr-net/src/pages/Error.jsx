import '../App.css';
import styled from 'styled-components';

const ErrorContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 50px;
`;

function Error() {
  return (
    <div>
      <title>Wealth Health</title>
      <main>
        <section className="features">
          <ErrorContent>
            <h1>
              404
              <br />
              Page not found
            </h1>
          </ErrorContent>
        </section>
      </main>
    </div>
  );
}

export default Error;
