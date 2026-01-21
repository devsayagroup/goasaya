"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTablesWithPins } from "@/lib/getTablesWithPins";
import { getEventById } from "@/lib/getEventById";
import { EventTable } from "@/types/ops";

export default function OpsLayoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const eventData = getEventById(id);

    if (!eventData) return notFound();

    const tables = getTablesWithPins();
    const [activeTableId, setActiveTableId] = useState<string | null>(null);

    const activeTable: EventTable | null =
    activeTableId
        ? eventData.tables[activeTableId] ?? null
        : null;

    useEffect(() => {
    document.body.style.overflow = activeTableId ? "hidden" : "";
    return () => {
        document.body.style.overflow = "";
    };
    }, [activeTableId]);


  return (
    <>
        <div className="relative max-w-6xl my-28 mx-auto">
            <Image
            src="/images/LAYOUT_GOASAYA.jpg"
            alt="Goasaya Layout"
            width={1400}
            height={900}
            className="w-full h-auto rounded-xl"
            />

            {/* HEADER */}
            <div className="absolute top-4 md:top-16 md:left-14 z-20 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-md">
            <h1 className="text-lg font-bold">{eventData.event.name}</h1>
            <p className="text-xs">
                {eventData.event.date} · {eventData.event.startTime} –{" "}
                {eventData.event.endTime}
            </p>
            <p className="text-xs mt-1 font-semibold">
                PIC: {eventData.pic.name}
            </p>
            </div>

            {/* TABLE PINS */}
            {tables.map(table => {
            const occupied = Boolean(eventData.tables[table.id]);

            return (
                <button
                key={table.id}
                style={{ top: table.top, left: table.left }}
                onClick={() => setActiveTableId(table.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2
                    w-3 md:w-9 h-3 md:h-9 rounded-full text-[6px] md:text-xs font-bold shadow-lg
                    ${occupied ? "bg-maroon text-white" : "bg-green-500 text-black"}
                `}
                >
                {table.label.replace("Main ", "")}
                </button>
            );
            })}
        </div>

        {activeTable && (
            <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
                <div className="min-h-screen flex items-start justify-center px-4 py-10">
                <div className="bg-white w-full max-w-lg rounded-xl p-5 max-h-[85vh] flex flex-col">
                    
                    {/* HEADER */}
                    <h2 className="text-lg font-bold mb-3">
                    Table {activeTableId}
                    </h2>

                    {/* SCROLL AREA */}
                    <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                    {activeTable.guests.map((guest, i) => (
                        <div key={i} className="border rounded-lg p-3 bg-gray-50">
                        <p className="font-semibold text-sm">
                            {guest.name}
                            {guest.role && (
                            <span className="text-xs text-gray-500"> ({guest.role})</span>
                            )}
                        </p>

                        <ul className="mt-2 text-sm space-y-1">
                            {guest.orders.map((order, idx) => (
                            <li key={idx} className="flex justify-between">
                                <span>• {order.menuName}</span>
                                <span>x {order.qty}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </div>

                    {/* FOOTER */}
                    <button
                    onClick={() => setActiveTableId(null)}
                    className="mt-4 bg-maroon text-white py-2 rounded-lg"
                    >
                    Close
                    </button>
                </div>
                </div>
            </div>
            )}


    </>
  );
}

