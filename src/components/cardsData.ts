// cardData.ts

export type CardData = {
  id: number;
  image: string;
  title: string;
  content: string;
  link: string;
};

export const cardsData: CardData[] = [
  {
    id: 1,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F0*hDAyhnOx767w5qma.jpg&f=1&nofb=1&ipt=9a370ada65c66207e8e423217a1fba2b1afe658c3f07ca375a387f737b465089&ipo=images",
    title: "Header Type 1",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus ",
    link: "headers/header-one"
  },
  {
    id: 2,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F0*hDAyhnOx767w5qma.jpg&f=1&nofb=1&ipt=9a370ada65c66207e8e423217a1fba2b1afe658c3f07ca375a387f737b465089&ipo=images",
    title: "Header Type 2",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus ",
    link: "headers/header-two"
  },
  {
    id: 3,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F0*hDAyhnOx767w5qma.jpg&f=1&nofb=1&ipt=9a370ada65c66207e8e423217a1fba2b1afe658c3f07ca375a387f737b465089&ipo=images",
    title: "Header Type 3",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus ",
    link: "/cards/glass-card"
  },
  {
    id: 4,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F0*hDAyhnOx767w5qma.jpg&f=1&nofb=1&ipt=9a370ada65c66207e8e423217a1fba2b1afe658c3f07ca375a387f737b465089&ipo=images",
    title: "Card 4 Title",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus ",
    link: "/card4"
  },
  {
    id: 5,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F0*hDAyhnOx767w5qma.jpg&f=1&nofb=1&ipt=9a370ada65c66207e8e423217a1fba2b1afe658c3f07ca375a387f737b465089&ipo=images",
    title: "Card 4 Title",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus ",
    link: "/card4"
  },
  {
    id: 6,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F0*hDAyhnOx767w5qma.jpg&f=1&nofb=1&ipt=9a370ada65c66207e8e423217a1fba2b1afe658c3f07ca375a387f737b465089&ipo=images",
    title: "Card 4 Title",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus ",
    link: "/card4"
  }
];
