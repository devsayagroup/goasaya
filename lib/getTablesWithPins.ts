import { TABLES } from "@/lib/tables";
import { TABLE_PINS } from "@/lib/tablePins";
import { TableWithPin } from "@/types/tableWithPin";

export function getTablesWithPins(): TableWithPin[] {
  return TABLES.map(table => {
    const pin = TABLE_PINS.find(p => p.id === table.id);

    if (!pin) {
      console.warn(`No pin position for table ${table.id}`);
    }

    return {
      ...table,
      top: pin?.top ?? "0%",
      left: pin?.left ?? "0%",
    };
  });
}
