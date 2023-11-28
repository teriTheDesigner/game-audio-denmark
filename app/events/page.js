"use client";

import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export default function Events() {
  const [events, setEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await supabase
          .from("Game-Audio-Denmark-Events")
          .select();
        setEvents(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.log("error", error);
        setEvents(null);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main>
      {events && (
        <div>
          {events.map((event) => {
            return <p key={event.id}>{event.title}</p>;
          })}
        </div>
      )}
    </main>
  );
}
