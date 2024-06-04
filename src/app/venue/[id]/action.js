"use server";

export const getVenue = async (id) => {

  const res = await fetch(`${process.env.HOST}/venue/${id}`, {
    cache: "no-store",
    method: "GET",
  });

  if (res.status != 200) {
    console.log(`got ${res.status} from /venue/id - /VENUE/ID/ACTION.JS`);
    return { venue: [] };
  }

  const data = await res.json();
  console.log(`got ${res.status} from /venue/id - /VENUE/ID/ACTION.JS`);
  return data;
};
