import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "mdkojcbmlvt2",
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { url, image, title, type } = item.fields;
        const id = item.sys.id;

        const img = image?.fields?.file?.url;
        return { img, title, url, type, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error();
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
