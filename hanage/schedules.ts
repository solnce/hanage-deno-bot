import { stations, holiday, Station } from "./stations";

export interface Schedule {
  station: Station;
  from: string;
  to: string;
}

export interface SchedulesOfMonth {
  [month: number]: Schedule[];
}

export interface SchedulesOfYear {
  [year: number]: SchedulesOfMonth;
}

const schedules2023: SchedulesOfMonth = {
  1: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-01-04",
      to: "2023-01-08",
    },
    {
      station: stations.ichigaya,
      from: "2023-01-09",
      to: "2023-01-15",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-01-16",
      to: "2023-01-22",
    },
    {
      station: stations.ogawamachi,
      from: "2023-01-23",
      to: "2023-01-29",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-01-30",
      to: "2023-01-31",
    },
  ],
  2: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-02-01",
      to: "2023-02-05",
    },
    {
      station: stations.ichigaya,
      from: "2023-02-09",
      to: "2023-02-15",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-02-13",
      to: "2023-02-19",
    },
    {
      station: stations.ogawamachi,
      from: "2023-02-20",
      to: "2023-02-26",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-02-27",
      to: "2023-02-28",
    },
  ],
  3: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-03-01",
      to: "2023-03-05",
    },
    {
      station: stations.ichigaya,
      from: "2023-03-06",
      to: "2023-03-12",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-03-13",
      to: "2023-03-19",
    },
  ],
  4: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-04-06",
      to: "2023-04-09",
    },
    {
      station: stations.ichigaya,
      from: "2023-04-10",
      to: "2023-04-16",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-04-17",
      to: "2023-04-23",
    },
    {
      station: stations.ogawamachi,
      from: "2023-04-24",
      to: "2023-04-30",
    },
  ],
  5: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-05-01",
      to: "2023-05-07",
    },
    {
      station: stations.ichigaya,
      from: "2023-05-08",
      to: "2023-05-14",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-05-15",
      to: "2023-05-21",
    },
    {
      station: stations.ogawamachi,
      from: "2023-05-22",
      to: "2023-05-28",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-05-29",
      to: "2023-05-31",
    },
  ],
  6: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-06-01",
      to: "2023-06-04",
    },
    {
      station: stations.ichigaya,
      from: "2023-06-05",
      to: "2023-06-11",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-06-12",
      to: "2023-06-18",
    },
  ],
  7: [
    {
      station: stations.ichigaya,
      from: "2023-07-10",
      to: "2023-07-16",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-07-17",
      to: "2023-07-23",
    },
    {
      station: stations.ogawamachi,
      from: "2023-07-24",
      to: "2023-07-30",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-07-31",
      to: "2023-07-31",
    },
  ],
  8: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-08-01",
      to: "2023-08-06",
    },
    {
      station: stations.ichigaya,
      from: "2023-08-07",
      to: "2023-08-13",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-08-14",
      to: "2023-08-20",
    },
    {
      station: stations.ogawamachi,
      from: "2023-08-21",
      to: "2023-08-27",
    },
    {
      station: stations.bakuroYokoyama,
      from: "2023-08-28",
      to: "2023-08-31",
    },
  ],
  9: [
    {
      station: stations.bakuroYokoyama,
      from: "2023-09-01",
      to: "2023-09-03",
    },
    {
      station: stations.ichigaya,
      from: "2023-09-04",
      to: "2023-09-10",
    },
    {
      station: stations.shinjukuSanchome,
      from: "2023-09-11",
      to: "2023-09-17",
    },
    {
      station: holiday,
      from: "2023-09-18",
      to: "2023-09-30",
    },
  ],
};

const schedules: SchedulesOfYear = {
  2023: schedules2023,
};

export default schedules;

export const businessHours = [
  "月-金  12:00~20:00",
  "土  11:00~19:00",
  "日･祝  11:00~17:00",
];
