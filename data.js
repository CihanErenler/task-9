const base_url = "http://localhost:3000/api/posts";

const data = {
  getAllData: async () => {
    const data = await fetch(base_url);
    const res = await data.json();
    return res;
  },
};

export default data;
