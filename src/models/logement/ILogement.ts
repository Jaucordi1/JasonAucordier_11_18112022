interface ILogementHost {
  name: string;
  picture: string;
}

export interface ILogement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: ILogementHost;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}
