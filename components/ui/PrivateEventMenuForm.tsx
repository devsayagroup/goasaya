"use client";

import { useState } from "react";
import { menuData } from "@/lib/menu-data";
import {
  SelectedMenuCategory,
  PrivateEventMenuRequest
} from "@/types/private-event";

export default function PrivateEventMenuForm() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [pax, setPax] = useState<number>(0);
    const [notes, setNotes] = useState("");
    const [menu, setMenu] = useState<SelectedMenuCategory[]>([]);
    const [loading, setLoading] = useState(false);

    function updateItem(
        category: string,
        title: string,
        quantity: number
    ) {
        setMenu(prev => {
        const existingCategory = prev.find(c => c.category === category);

        if (!existingCategory) {
            return [
            ...prev,
            {
                category,
                items: quantity > 0 ? [{ title, quantity }] : []
            }
            ];
        }

        const items = [...existingCategory.items];
        const index = items.findIndex(i => i.title === title);

        if (quantity <= 0) {
            if (index !== -1) items.splice(index, 1);
        } else {
            if (index === -1) {
            items.push({ title, quantity });
            } else {
            items[index].quantity = quantity;
            }
        }

        return prev.map(c =>
            c.category === category ? { ...c, items } : c
        );
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const payload: PrivateEventMenuRequest = {
        name,
        date,
        time,
        pax,
        notes,
        menu: menu.filter(c => c.items.length > 0),
        status: "PENDING",
        };

        const res = await fetch("/api/private-event", {
        method: "POST",
        body: JSON.stringify(payload)
        });

        setLoading(false);

        if (!res.ok) {
        alert("Failed to submit menu request");
        return;
        }
        alert("Menu request sent to kitchen");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-black px-4 md:px-8 py-12 rounded-md mx-auto space-y-8 max-w-3xl">
            <h1 className="text-xl md:text-3xl font-style leading-tight uppercase mb-8 md:mb-14 text-center">
                Request Menu for Kitchen
            </h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border rounded-md p-4">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-200">
                Client Name
                </label>
                <input
                type="text"
                placeholder="Client Name"
                required
                onChange={e => setName(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-white focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-200">
                Pax
                </label>
                <input
                type="number"
                min={1}
                placeholder="Number of Guests"
                required
                onChange={e => setPax(+e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-white focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-200">
                Event Date
                </label>
                <input
                type="date"
                required
                onChange={e => setDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-white focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-200">
                Event Time
                </label>
                <input
                type="time"
                required
                onChange={e => setTime(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-white focus:outline-none"
                />
            </div>
        </div>

        <div className="space-y-6">
            {menuData.map(category => (
                <div
                key={category.name}
                className="border rounded-md overflow-hidden"
                >
                {/* Category Header */}
                <div className="px-4 py-3 border-b">
                    <h3 className="text-md font-semibold uppercase tracking-wide text-gray-100">
                    {category.name}
                    </h3>
                </div>

                {/* Items */}
                <div className="divide-y">
                    {category.items.map(item => (
                    <div
                        key={item.title}
                        className="flex items-center gap-4 px-4 py-3"
                    >
                        <span className="flex-1 text-sm text-gray-100">
                        {item.title}
                        </span>

                        <input
                        type="number"
                        min={0}
                        placeholder="0"
                        onChange={e =>
                            updateItem(
                            category.name,
                            item.title,
                            Number(e.target.value)
                            )
                        }
                        className="w-20 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-center focus:border-white focus:outline-none"
                        />
                    </div>
                    ))}
                </div>
                </div>
            ))}
        </div>

        <div className="border rounded-md p-4">
            <label className="block text-md font-medium text-gray-100 mb-2">
                Notes for Kitchen
            </label>

            <textarea
                placeholder="Special requests, allergies, timing notes, etc."
                rows={4}
                onChange={e => setNotes(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-white focus:outline-none resize-none"
            />
        </div>



        {/* {menuData.map(category => (
            <div key={category.name} className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
                {category.name}
            </h3>

            <div className="space-y-2">
                {category.items.map(item => (
                <div key={item.title} className="flex gap-3 items-center">
                    <span className="flex-1">{item.title}</span>
                    <input
                    type="number"
                    min={0}
                    placeholder="Qty"
                    className="w-16"
                    onChange={e =>
                        updateItem(
                        category.name,
                        item.title,
                        Number(e.target.value)
                        )
                    }
                    />
                </div>
                ))}
            </div>
            </div>
        ))}

        <textarea
            placeholder="Notes for kitchen"
            className="w-full border p-3 rounded"
            onChange={e => setNotes(e.target.value)}
        /> */}

        <button
            type="submit"
            disabled={loading}
            className="block bg-orange text-white mx-auto px-6 py-3 rounded cursor-pointer"
        >
            {loading ? "Sending..." : "Submit Menu Request"}
        </button>
        </form>
    );
}
