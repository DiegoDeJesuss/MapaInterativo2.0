  const estados = {
    "BR-AC": { nome: "Acre", lojas: 80 },
    "BR-AL": { nome: "Alagoas", lojas: 40 },
    "BR-AM": { nome: "Amazonas", lojas: 10 },
    "BR-AP": { nome: "Amapá", lojas: 5 },
    "BR-BA": { nome: "Bahia", lojas: 20 },
    "BR-CE": { nome: "Ceará", lojas: 10 },
    "BR-DF": { nome: "Distrito Federal", lojas: 70},
    "BR-ES": { nome: "Espírito Santo", lojas: 60 },
    "BR-GO": { nome: "Goiás", lojas: 20 },
    "BR-MA": { nome: "Maranhão", lojas: 45 },
    "BR-MG": { nome: "Minas Gerais", lojas: 10 },
    "BR-MS": { nome: "Mato Grosso do Sul", lojas: 60 },
    "BR-MT": { nome: "Mato Grosso", lojas: 70 },
    "BR-PA": { nome: "Pará", lojas: 60 },
    "BR-PB": { nome: "Paraíba", lojas: 50 },
    "BR-PE": { nome: "Pernambuco", lojas: 40 },
    "BR-PI": { nome: "Piauí", lojas: 30 },
    "BR-PR": { nome: "Paraná", lojas: 70 },
    "BR-RJ": { nome: "Rio de Janeiro", lojas: 30 },
    "BR-RN": { nome: "Rio Grande do Norte", lojas: 55 },
    "BR-RO": { nome: "Rondônia", lojas: 20 },
    "BR-RR": { nome: "Roraima", lojas: 35 },
    "BR-RS": { nome: "Rio Grande do Sul", lojas: 16 },
    "BR-SC": { nome: "Santa Catarina", lojas: 50 },
    "BR-SE": { nome: "Sergipe", lojas: 30 },
    "BR-SP": { nome: "São Paulo", lojas: 45 },
    "BR-TO": { nome: "Tocantins", lojas: 25 }
  };


  document.addEventListener("DOMContentLoaded", function() {
    const estadosSVG = document.querySelectorAll('svg a, svg path');
    
    estadosSVG.forEach(function(estado) {
      // Vamos tentar pegar o 'id' ou 'title' do elemento
      const estadoId = estado.getAttribute('id') || estado.getAttribute('title');
      
      // Verifique se o ID existe no objeto 'estados'
      if (estadoId && estados[estadoId]) {
        const lojas = estados[estadoId].lojas; // Acessa o número de lojas com base no ID do estado

        
        
        // Cria o conteúdo para o tooltip
        const content = `${estados[estadoId].nome} - Lojas: ${lojas || 'Não disponível'}`;
        
        // Cria o tooltip com o conteúdo
        tippy(estado, {
          content: content,
        });
      }
    });
  });
  
  Object.keys(estados).forEach(id => {
    const estadoEl = document.getElementById(id);
    if (estadoEl) {
      tippy(estadoEl, {
        content: `${estados[id].nome} - Lojas: ${estados[id].lojas}`,
        placement: 'top',
        arrow: true,
      });
    }
  });
  


  

  
