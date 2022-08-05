import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const client = trpc.useContext();
  const trips = trpc.useQuery(["trip.getAll"]);

  const createTrip = trpc.useMutation(["trip.create"], {
    onSuccess: () => {
      client.invalidateQueries(["trip.getAll"]);
      form.current?.reset();
    },
  });

  const handleCreateTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    };
    createTrip.mutate(data);
  };

  return (
    <div className="p-10">
      <form onSubmit={handleCreateTrip} ref={form}>
        <p>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Description:
            <textarea name="description" />
          </label>
        </p>
        <button type="submit">Create</button>
      </form>
      <div>
        {trips.data?.map((trip) => (
          <Link href={`/trip/${trip.id}`}>
            <p key={trip.id} className="p-10">
              {trip.id}, {trip.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
