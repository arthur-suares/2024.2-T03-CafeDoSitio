import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import produtoService from "../../services/produto.service.js";
import { toast } from 'react-toastify';

import {
  Title,
  Label,
  Form,
  Button,
  LocAtual,
  Input,
  Container,
  ScrollArea,
  Card,
  ResultadosTitle
} from "./styled";

function PertodeVoce() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [produto, setProduto] = useState("");
  const [nomeProdutoBusca, setNomeProdutoBusca] = useState("");
  const [cep, setCep] = useState(""); // Guarda o cep que o usuário digitar no campo
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // Estado para armazenar os estabelecimentos encontrados
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [nomeProdutoEncontrado, setNomeProdutoEncontrado] = useState("");

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  
  const customIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Ícone vermelho
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41], // Tamanho do ícone
    iconAnchor: [12, 41], // Ponto de ancoragem
    popupAnchor: [1, -34], // Posição do popup
    shadowSize: [41, 41] // Tamanho da sombra
  });

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Erro ao obter localização: " + err.message);
        }
      );
    } else {
      setError("Geolocalização não é suportada por este navegador.");
    }
  };

  async function obterCoordenadasPorCEP(cep) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${cep},Brasil`
    );
    const data = await response.json();
    
    if (data.length > 0) {
      const coordenadas = { latitude: data[0].lat, longitude: data[0].lon };      
      return coordenadas;
    } else {
      throw new Error("CEP não encontrado!");
    }
  };

  const handleBuscarProduto = (e) => {
    e.preventDefault();
    setNomeProdutoBusca(produto);
  };

  const handleCep = async (e) => {
    e.preventDefault();
    console.log("cep =>", cep);

    try {
      const coordenadas = await obterCoordenadasPorCEP(cep);
      console.log("Coordenadas obtidas:", coordenadas);

      setLat(coordenadas.latitude);
      setLon(coordenadas.longitude);
    } catch (error) {
      console.error("Erro ao obter coordenadas:", error);
    }
  };

  //Quando a pagina é carregada, esse useEffect centraliza o mapa em Brasília
  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([-15.7801, -47.9292], 12);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRef.current);
  }, []);

  // Busca os produtos quando nomeProdutoBusca mudar
  useEffect(() => {
    const fetchData = async () => {
      if (!nomeProdutoBusca) return;

      setEstabelecimentos([]);
      setNomeProdutoEncontrado("");

      try {
        const response = await produtoService.buscarProduto(nomeProdutoBusca);
        const produtos = response.data;

        if (produtos.length > 0) {
          setNomeProdutoEncontrado(produtos[0].nome);
          setEstabelecimentos(produtos[0].estabelecimentos || []);
        } else {
          toast.error("Nenhum produto encontrado com esse nome!");
          setEstabelecimentos([]);
        }
      } catch (error) {
        toast.error("Erro ao buscar produto!");
        setEstabelecimentos([]);
      }
    };

    fetchData();
  }, [nomeProdutoBusca]);

  // Quando o usuario permite a localização, 'location' fica verdadeiro e muda de estado
  // Isso aciona esse useEffect, que coloca um marcador na localização do usuario
  useEffect(() => {
    if (!mapRef.current || location.lat === null || location.lng === null) return;

    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    markerRef.current = L.marker([location.lat, location.lng])
      .addTo(mapRef.current)
      .bindTooltip("Você está aqui!", { permanent: false, direction: "top" });

    mapRef.current.setView([location.lat, location.lng], 13);
  }, [location]);

  useEffect(() => {
    if (!mapRef.current) return;
  
    // Remover marcadores antigos antes de adicionar novos
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });
  
    const locations = [];
  
    // Adicionar novos marcadores dos estabelecimentos
    estabelecimentos.forEach((estab) => {
      if (estab.latitude && estab.longitude) {
        L.marker([estab.latitude, estab.longitude], { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>${estab.nomeEstabelecimento}</b><br>${estab.rua}, ${estab.bairro} - ${estab.estado}`);
        locations.push([estab.latitude, estab.longitude]); // Adicionar coordenadas dos estabelecimentos
      }
    });
  
    // Adicionar o marcador da localização do usuário
    if (location.lat !== null && location.lng !== null) {
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }
  
      markerRef.current = L.marker([location.lat, location.lng])
        .addTo(mapRef.current)
        .bindTooltip("Você está aqui!", { permanent: false, direction: "top" });
      locations.push([location.lat, location.lng]); // Adicionar coordenadas do usuário
    }
  
    // Adicionar o marcador do CEP, se existir
    if (lat !== null && lon !== null) {
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current); // Remover o marcador anterior
      }
  
      markerRef.current = L.marker([lat, lon])
        .addTo(mapRef.current)
        .bindTooltip("Localização do CEP", { permanent: false, direction: "top" });
      locations.push([lat, lon]); // Adicionar coordenadas do CEP
    }
  
    // Ajustar a visualização do mapa para incluir tanto os estabelecimentos quanto a localização do usuário ou o CEP
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations);
      mapRef.current.fitBounds(bounds); // Ajusta a visualização para incluir todos os pontos
    }
  
  }, [estabelecimentos, location, lat, lon]); // Executa quando `estabelecimentos`, `location`, `lat` ou `lon` mudarem

  // Função para alternar para a localização atual
  const handleLocationAtual = () => {
    setLat(null); // Limpa a localização do CEP
    handleGetLocation(); // Atualiza a localização do usuário
  };

  return (
    <>
      <Form>
        <Title>Perto de Você</Title>
        <Label htmlFor="name" style={{ color: "#006343" }}>
          Onde você quer encontrar a Família do Sítio?
        </Label>
        <div style={{ display: "flex" }}>
          <Input 
            type="text" 
            id="cep" 
            placeholder="Digite um CEP" 
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <Button onClick={handleCep}>Enviar</Button>
        </div>
        <LocAtual as="p" onClick={handleLocationAtual}>
          ou clique aqui para usar a localização atual
        </LocAtual>
        <div style={{ display: "flex" }}>
          <Input
            type="text"
            id="produto"
            placeholder="Digitar produto que deseja encontrar"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
          <Button type="button" onClick={handleBuscarProduto}>
            Buscar
          </Button>
        </div>
      </Form>

      <div style={{ display: "flex" }}>
        <div
          id="map"
          ref={mapContainerRef}
          style={{ height: "500px", width: "100%" }}
        />

        {/* Resultados incorporados aqui */}
        <Container style={{ width: "40%" }}>
          <ResultadosTitle>Resultados</ResultadosTitle>
          <ScrollArea>
            {estabelecimentos.length > 0 ? (
              estabelecimentos.map((estab, index) => (
                <Card key={index}>
                  <h2>{nomeProdutoEncontrado} está em:</h2>
                  <h3>{estab.nomeEstabelecimento}</h3>
                  <p>{estab.rua}, {estab.bairro} - {estab.estado}</p>
                  <p>CEP: {estab.cep}</p>
                </Card>
              ))
            ) : (
              <p>Nenhum local encontrado.</p>
            )}
          </ScrollArea>
        </Container>
      </div>

      {error && <p>{error}</p>}
    </>
  );
}

export default PertodeVoce;
