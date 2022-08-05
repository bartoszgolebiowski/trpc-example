import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { trpc } from "../../utils/trpc";

const SingleTrip: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const form = React.useRef<HTMLFormElement>(null);
  const client = trpc.useContext();
  const { data: trip } = trpc.useQuery(["trip.getById", { id: String(id) }]);

  const id1 = trpc.useQuery([
    "trip.getById",
    { id: String("cl5pduahs00045w8yj20ukcjg") },
  ]);
  const id2 = trpc.useQuery([
    "trip.getById",
    { id: String("cl5pdv25e00215w8yzrdn84d7") },
  ]);
  const id3 = trpc.useQuery([
    "trip.getById",
    { id: String("cl5pdw0zy00335w8yrhmag89r") },
  ]);

  const addExpense = trpc.useMutation(["trip.addExpense"], {
    onSuccess: () => {
      client.invalidateQueries(["trip.getAll"]);
      form.current?.reset();
    },
  });

  const handleCreateExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      tripId: formData.get("tripId") as string,
      amount: Number(formData.get("amount")),
    };
    addExpense.mutate(data);
  };

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <details>
        <summary>Add expense</summary>
        <form onSubmit={handleCreateExpense}>
          <input hidden name="tripId" defaultValue={trip.id}></input>
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
          <p>
            <label>
              Amount:
              <input type="number" name="amount" required />
            </label>
          </p>
          <button type="submit">Create</button>
        </form>
      </details>
    </div>
  );
};

export default SingleTrip;
