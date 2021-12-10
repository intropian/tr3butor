export type Dao = {
  name: string;
  description: string;
  id: string;
  icon: string;
  color: string;
  tags: [];
  dateFounded: string;
  website: string;
  discord: string;
  mcap: string;
  volume: string;
  tvl: string;
  contributors: [];
  followers: [];
};

export type DaoApiData = { data: Dao[] };
export type SelectedDaoApiData = { data: Dao };
