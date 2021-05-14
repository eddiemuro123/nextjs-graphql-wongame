export default [
  {
    title: 'Preço',
    name: 'preco',
    type: 'checkbox',
    fields: [
      {
        label: 'Abaixo de R$50',
        name: 'abaixo-50'
      },
      {
        label: 'Abaixo de R$100',
        name: 'abaixo-100'
      },
      {
        label: 'Abaixo de R$150',
        name: 'abaixo-150'
      },
      {
        label: 'Abaixo de R$200',
        name: 'abaixo-200'
      },
      {
        label: 'Gratuito',
        name: 'gratuito'
      },
      {
        label: 'Em desconto',
        name: 'em-desconto'
      }
    ]
  },
  {
    title: 'Filtrar por',
    name: 'filtrar_por',
    type: 'radio',
    fields: [
      {
        label: 'Maior para menor',
        name: 'maior-para-menor'
      },
      {
        label: 'Menor para maior',
        name: 'menor-para-maior'
      }
    ]
  },
  {
    title: 'Sistema',
    name: 'sistema',
    type: 'checkbox',
    fields: [
      {
        label: 'Windows',
        name: 'windows'
      },
      {
        label: 'Linux',
        name: 'linux'
      },
      {
        label: 'MacOS',
        name: 'macos'
      }
    ]
  },
  {
    title: 'Gênero',
    name: 'genero',
    type: 'checkbox',
    fields: [
      {
        label: 'Ação',
        name: 'acao'
      },
      {
        label: 'Aventura',
        name: 'aventura'
      },
      {
        label: 'FPS',
        name: 'fps'
      },
      {
        label: 'MMORPG',
        name: 'mmorpg'
      },
      {
        label: 'RPG',
        name: 'rpg'
      },
      {
        label: 'Indie',
        name: 'indie'
      },
      {
        label: 'Tiros',
        name: 'tiros'
      },
      {
        label: 'Simulador',
        name: 'simulador'
      }
    ]
  }
]
