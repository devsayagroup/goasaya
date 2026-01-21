import Link from "next/link";
import events from "@/lib/event-ops.json";

export default function OpsEventListPage() {
  return (
    <div className="max-w-5xl mx-auto my-32 px-4">
      <h1 className="text-2xl font-bold mb-6">Special Events</h1>

      <div className="space-y-3">
        {events.map(data => (
          <Link
            key={data.id}
            href={`/special-event/${data.id}`}
            className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{data.event.name}</h2>
                <p className="text-sm text-gray-600">
                  {data.event.date} · {data.event.startTime} - {data.event.endTime}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PIC: {data.pic.name}
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-maroon text-white">
                {data.event.area}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
