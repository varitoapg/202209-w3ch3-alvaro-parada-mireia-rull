interface ShowStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
  rate: () => void;
}

export default ShowStructure;
