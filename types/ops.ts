
export type Area = "MAIN" | "GLASS" | "HOLE" | "CAVE";


export type Table = {
  id: string;          // M1, G3, HOLE
  area: Area;
  label: string;
  capacity: number;
};

export type Order = {
  menuName: string;
  qty: number;
};

export type Guest = {
  name: string;
  role?: string;
  orders: Order[];
};

export type EventTable = {
  capacity: number;
  notes?: string;
  guests: Guest[];
};

export type OpsEvent = {
  id: string;
  event: {
    name: string;
    type: string;
    date: string;
    startTime: string;
    endTime: string;
    area: Area;
    totalPax: number;
    notes?: string;
  };
  pic: {
    name: string;
    phone: string;
    company?: string;
  };

  tables: {
    [tableId: string]: EventTable | undefined;
  };
};
