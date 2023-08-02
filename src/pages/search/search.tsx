import { useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Datepicker from '../../components/datepicker/Datepicker';
import Panel from '../../components/panel/Panel';
import { searchPositions } from '../../services/api';
import React from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
export default function SearchPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [identification, setIdentification] = useState('');
  const [positions, setPositions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleSearch = async (page?: number) => {
    const response = await searchPositions(startDate, endDate, identification, page || currentPage);
    setPositions(response.resultado);
    setCurrentPage(response.pagina);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleSearch(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    handleSearch(currentPage + 1);
  };

  return (
    <>
      <Header onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Container>
        <h1>Pesquisa de Posições</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSearch(1)
          }
        }>
          <Input
            type="text"
            placeholder="Identificação"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
          />
          <Input
              type="date"
              placeholder="Data inicial"
              value={startDate}
              onChange={(e) => { 
                setStartDate(e.target.value)
              }
            }
          />
          <Input
              type="date"
              placeholder="Data Final"
              value={endDate}
              onChange={(e) => { 
                setEndDate(e.target.value)
              }
            }
          />
          {/* <Datepicker
            placeholder="Data inicial"
            selected={startDate}
            onChange={(date) => { 
                console.log('aqui' ,date)
                setStartDate(date)
                
              }
            }
          />
          <Datepicker
            placeholder="Data final"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          /> */}
          <Button 
            label="Pesquisar"
            onClick={handleSearch}
          ></Button>
        </form>
        {positions.length > 0 && (
          <Panel>
            <h2>Resultados da pesquisa:</h2>
            <ul>
              {positions.map((position) => (
                <li key={position.identificacao}>
                  <strong>Identificação:</strong> {position.identificacao}
                  <br />
                  <strong>Data:</strong> {position.criado_em}
                  <br />
                  <strong>Latitude:</strong> {position.latitude}
                  <br />
                  <strong>Longitude:</strong> {position.longitude}
                  <br />
                  <strong>Ignição:</strong> {position.ignicao ? 'Ligada' : 'Desligada'}
                  <br />
                  <strong>Velocidade:</strong> {position.velocidade} km/h
                  <br />
                  <strong>Bateria:</strong> {position.bateria} V
                  <br />
                  <strong>Odômetro:</strong> {position.odometro} km
                </li>
              ))}
            </ul>
            <div>
              Página {currentPage} de {Math.ceil(response.total_de_registros / 10)}
              <Button onClick={handlePrevPage} disabled={currentPage <= 1}>
                Anterior
              </Button>
              <Button onClick={handleNextPage} disabled={currentPage >= Math.ceil(response.total_de_registros / 10)}>
                Próxima
              </Button>
            </div>
          </Panel>
        )}
      </Container>
    </>
  );
}
