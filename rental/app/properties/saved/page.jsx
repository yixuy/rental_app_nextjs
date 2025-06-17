"use client";

import { useState, useEffect } from "react";
import Properties from "@/components/Properties";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const SavedPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaveProperties = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(res.statusText);
          toast.error("Fail to fetch properties");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch saved properties ");
      } finally {
        setLoading(false);
      }
    };

    fetchSaveProperties();
  }, []);
  return loading ? <Spinner loading={loading} /> : <Properties />;
};

export default SavedPropertiesPage;
