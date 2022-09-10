import axios from "axios";
import { useState, useEffect } from "react";

export function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get("https://api-fake-blog.herokuapp.com/postagens").then((response) => {
        setData(response.data);
        });
    }, []);

  return { data };
}